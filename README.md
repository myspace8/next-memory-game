This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## File structure: AI Generated (chatGT)
/memory-game
│
├── /app
│   ├── /(auth)                # Authentication-related pages
│   │   ├── /sign-in
│   │   │   ├── page.tsx       # Sign-in page
│   │   └── /sign-up
│   │       └── page.tsx       # Sign-up page
│   ├── /game
│   │   ├── /play
│   │   │   ├── /[theme]
│   │   │   │   └── page.tsx   # Dynamic route for gameplay with environment (e.g., /game/play/ocean)
│   │   └── page.tsx           # Game home page (level selector)
│   ├── /leaderboard
│   │   └── page.tsx           # Leaderboard page
│   ├── /profile
│   │   └── page.tsx           # Profile page
│   ├── /layout.tsx            # Layout for the app
│   ├── /page.tsx              # Main landing page (home)
│   └── /globals.css           # Global CSS
│
├── /components
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer
│   ├── GameGrid.tsx           # Game grid component
│   ├── LeaderboardList.tsx    # Leaderboard list component
│   └── ProfileInfo.tsx        # Profile information component
│
├── /lib
│   └── firebase.ts            # Firebase configuration and initialization
│
├── /styles
│   └── shadcn.css             # shadcn UI styles
│
├── /public
│   └── /images                # Static images
│
├── .env.local                 # Environment variables (Firebase API keys, etc.)
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Project dependencies and scripts

## User Journey:
- Authentication: The user signs up or logs in via the Authentication System.
- User Profile: The User Management System retrieves the user's profile and past game progress from Firestore.
- Gameplay: The user selects a level, and the Game Logic System starts the game (game grid is loaded).
- Gameplay Updates: As the user plays, their progress (moves, time, score) is tracked locally.
- Game Completion: Upon completing a level, the Notification & Reward System displays a modal and awards coins.
- Data Persistence: The Game Progress and Data Storage System updates Firestore with the new game stats and rewards.
- Leaderboard Update: The Leaderboard System updates the user's position and reflects real-time changes in the leaderboard.
- Profile Management: The user can update their profile (name, phone, etc.) via the User Management System, and these changes are reflected in Firestore.