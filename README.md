# 바로인쇄소 홈페이지

라벨 스티커 인쇄전문 **바로인쇄소** 공식 홈페이지

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deploy**: Cloudflare Pages (`@cloudflare/next-on-pages`)
- **Runtime**: Edge Runtime

## Pages

- `/` — 메인 (소개)
- `/services` — 서비스
- `/contact` — 연락처 

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy (Cloudflare Pages)

```bash
# Cloudflare Pages 빌드
npm run pages:build

# 로컬 미리보기
npm run preview

# 배포
npm run deploy
```

## Cloudflare Pages 설정

- Build command: `npm run pages:build`
- Build output directory: `.vercel/output/static`
- Node.js version: 20+
