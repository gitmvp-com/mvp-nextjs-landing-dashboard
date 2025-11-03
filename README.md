# Next.js Landing Page + Dashboard MVP

A simplified MVP version of a Next.js application featuring:
- 🎨 Beautiful landing page with scroll animations
- 📊 Dashboard interface
- 👤 User profile page
- 🌓 Dark mode support
- 🎭 Modern UI components

**Note:** This is a front-end only MVP with no authentication or backend integration.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/mvp-nextjs-landing-dashboard.git
cd mvp-nextjs-landing-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── dashboard/        # Dashboard page
│   ├── profile/          # User profile page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
│   ├── TopBar.tsx        # Navigation bar
│   ├── MetricCard.tsx    # Metric display cards
│   ├── PricingSection.tsx # Pricing component
│   └── TypewriterEffect.tsx # Animated text
└── hooks/                # Custom React hooks
```

## ✨ Features

### Landing Page
- Hero section with gradient backgrounds
- Animated typewriter effect
- Scroll-triggered animations
- Sticky navigation
- Pricing section
- Responsive design

### Dashboard
- Metric cards with statistics
- Activity timeline
- Quick actions panel
- Dark mode compatible

### Profile Page
- User information display (mock data)
- Settings panel
- Account management UI

### Dark Mode
- Automatic system preference detection
- Smooth transitions
- Custom dark theme colors

## 🛠️ Built With

- [Next.js 15.1.3](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Styling
- [Framer Motion 12.4.3](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA',
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Content
- **Landing page:** Edit `app/page.tsx`
- **Dashboard:** Edit `app/dashboard/page.tsx`
- **Profile:** Edit `app/profile/page.tsx`

## 📝 License

MIT License - feel free to use this project for your own applications!

## 🙏 Credits

Based on the excellent work from [ShenSeanChen/launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase)

---

Made with ❤️ using GitMVP
