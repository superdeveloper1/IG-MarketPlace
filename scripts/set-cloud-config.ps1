param(
    [Parameter(Mandatory = $true)][string]$ApiBaseUrl,
    [string]$ApiKey = "",
    [switch]$Enable,
    [switch]$AllowLocalProductOverrides
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$configPath = Join-Path $repoRoot "cloud-config.js"

if (-not (Test-Path $configPath)) {
    throw "cloud-config.js not found at $configPath"
}

$safeUrl = ($ApiBaseUrl.Trim() -replace "'", "\'")
$safeKey = ($ApiKey.Trim() -replace "'", "\'")
$enabledLiteral = if ($Enable) { "true" } else { "false" }
$allowLocalProductOverridesLiteral = if ($AllowLocalProductOverrides) { "true" } else { "false" }

$content = @"
window.IG_CLOUD_CONFIG = {
    // Set to your deployed API Gateway base URL, for example:
    // https://abc123.execute-api.us-east-1.amazonaws.com/prod
    apiBaseUrl: '$safeUrl',
    // Optional API key if your API Gateway stage requires one.
    apiKey: '$safeKey',
    enabled: $enabledLiteral,
    // When false, browser-local saved product lists are ignored on startup.
    allowLocalProductOverrides: $allowLocalProductOverridesLiteral,
    // Request timeout for cloud reads/writes in milliseconds.
    timeoutMs: 7000
};
"@

Set-Content -Path $configPath -Value $content -Encoding UTF8
Write-Host "Updated cloud-config.js" -ForegroundColor Green
Write-Host ("apiBaseUrl=" + $ApiBaseUrl)
Write-Host ("enabled=" + $enabledLiteral)
Write-Host ("allowLocalProductOverrides=" + $allowLocalProductOverridesLiteral)
