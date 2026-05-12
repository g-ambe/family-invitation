# family-invitation

Cloudflare Pages 前提の静的サイト構成です。

## Deploy 方針
- `npm run build` の **静的出力 `dist/`** をそのまま Cloudflare Pages へデプロイ
- Workers deploy / wrangler upload は不要

## Build
```bash
npm install
npm run build
```

## Cloudflare Pages 設定
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

