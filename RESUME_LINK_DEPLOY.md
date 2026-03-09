# Publish This Project As A Resume Link

This repo is set up to auto-deploy to GitHub Pages from the `main` branch.

## 1. Push to GitHub

1. Create a GitHub repo.
2. Push this code to the repo.
3. Ensure your default branch is `main`.

## 2. Enable Pages

1. Open the repo on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.

## 3. Trigger Deployment

1. Push any commit to `main` (or run the workflow manually from `Actions`).
2. Wait for workflow `Deploy Site To GitHub Pages` to finish.

## 4. Copy Your Public URL

Your site URL will be:

`https://<your-github-username>.github.io/<your-repo-name>/`

Use that URL in your resume, for example:

- `Live Project: https://<your-github-username>.github.io/<your-repo-name>/`

## Notes

- This deployment publishes static frontend files only (`index.html`, `styles.css`, and root-level `.js` files).
- Current `cloud-config.js` keeps cloud sync disabled by default, so the demo works without AWS setup.
