# Hotaka Funahashi Portfolio

船橋穂天のポートフォリオサイトです。

## Live Site

https://portfolio-five-pi-58.vercel.app

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features

- ミニマル・モダンなデザイン
- ダークモード対応
- レスポンシブデザイン
- スムーススクロール
- グラデーションホバーエフェクト

## Sections

- **Hero** - 名前、肩書き、所在地
- **About** - 自己紹介とプロフィール写真
- **Projects** - 制作物の紹介（リンク先アイコン付き）
- **Skills** - Languages / Hardware / Frameworks
- **Contact** - 連絡先リンク

## Projects Featured

| Project | Description | Link |
|---------|-------------|------|
| AI Necklace | 音声操作AIデバイス | X (Twitter) |
| CopiChat | iOSチャットアプリ | App Store |
| AIデバイス未来考察 | 技術書 | 技術書典 |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open http://localhost:3000 to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & CSS variables
│   ├── layout.tsx     # Root layout with Header/Footer
│   └── page.tsx       # Main page
└── components/
    ├── Header.tsx     # Navigation with scroll effect
    ├── Hero.tsx       # Hero section
    ├── About.tsx      # About section with profile image
    ├── Projects.tsx   # Projects with link icons
    ├── Skills.tsx     # Skills grid
    ├── Contact.tsx    # Contact section
    └── Footer.tsx     # Footer
```

## Author

**Hotaka Funahashi** (船橋穂天)
- CEO of Universal Pine Inc.
- Tokyo, Japan
- Email: ho@universalpine.com

## License

MIT
