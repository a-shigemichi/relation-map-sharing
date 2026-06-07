# relation-map-sharing フロントエンド

[Next.js](https://nextjs.org) の [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) で構築したプロジェクトです。

## 技術スタック

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと結果を確認できます。

`src/app/page.tsx` を編集するとページがリアルタイムで更新されます。

## ディレクトリ構成

```
frontend/
├── src/
│   └── app/          # App Router のルートディレクトリ
├── public/           # 静的ファイル
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Next.js チュートリアル](https://nextjs.org/learn)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
