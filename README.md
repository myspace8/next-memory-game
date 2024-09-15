This is a [Next.js](https://nextjs.org) project

## TODO
- Create a QR code that takes users to the /game page. If the player isn’t logged in or it's their first time playing without an account, they’ll be redirected to the /sign-in page. There, they can log in or tap a link to go to the homepage and sign up.
- Error To Consider: `The requested resource isn't a valid image for /default-avatar.png received text/html; charset=utf-8`. This error occurs when I use nextjs `Image` instead of normal `img`. Potential fix is to add some appropriate code in the `next.config.js` file.
- Interesting system expansion features: 1. Real-time updates: use Firebase Firestore's `snapshot` method to listen to real-time updates and reflect changes in the UI as they happen. 2. Expand the `gameProgress` field to include more detailed metrics like, Time spent on each level, Average moves per game, and level completion rate. 3. Custom User Preferences like, Theme selection (dark or light), Notification preferences and Game difficulty level.


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