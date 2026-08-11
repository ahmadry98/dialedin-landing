# DialedIn Landing

Landing page + waitlist for DialedIn.me.

## Local dev
```bash
npm install
npm run dev

## CI/CD Image Builds

Pull requests to `main` run the landing lint/build workflow only. The landing Docker image is published on pushes to `dev` or `main` only when app source, public assets, package files, Dockerfile, Next config, TypeScript config, or the image workflow changes. Manual `workflow_dispatch` can still rebuild an image on demand.

