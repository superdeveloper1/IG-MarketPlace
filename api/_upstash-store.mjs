function getUpstashConfig() {
  const url = String(
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || ""
  ).trim();
  const token = String(
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
  ).trim();
  return { url, token };
}

async function sendUpstashCommand(args) {
  const { url, token } = getUpstashConfig();
  if (!url || !token) {
    throw new Error(
      "Missing Upstash KV config. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in Vercel."
    );
  }

  const endpoint = url.replace(/\/+$/, "");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  const text = await response.text();
  let payload = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(
      "Upstash request failed (" + response.status + "): " + (text || "Unknown error")
    );
  }

  if (payload && payload.error) {
    throw new Error(String(payload.error));
  }

  return payload ? payload.result : null;
}

export async function loadStateByKey(partitionKey) {
  const raw = await sendUpstashCommand(["GET", partitionKey]);
  if (!raw) return null;
  if (typeof raw === "object" && raw !== null && raw.data) {
    return raw;
  }
  if (typeof raw !== "string") return null;
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (error) {
    return null;
  }
}

export async function saveStateByKey(partitionKey, data) {
  const item = {
    pk: partitionKey,
    updatedAt: new Date().toISOString(),
    data: data,
  };
  await sendUpstashCommand(["SET", partitionKey, JSON.stringify(item)]);
  return item;
}
