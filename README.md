# 🏆 EYFI Challenge Leaderboard

> **Live Demo:** [https://eyfi-tarun.netlify.app/](https://eyfi-tarun.netlify.app/)

A polished, modern, and responsive leaderboard web application built for the **EYFI (Earn Your First Income)** student earning challenge. EYFI is an earning competition where college students across India compete based on the real-world income they generate through freelancing, development, design, and digital entrepreneurship.

---

## 🚀 Live Link

🔗 **Deployment URL:** [https://eyfi-tarun.netlify.app/](https://eyfi-tarun.netlify.app/)

---

## ✨ Key Features

- **🏆 3D Olympic Podium**: Prominent gold, silver, and bronze pedestals celebrating the Top 3 champions (#1 Rahul Sharma — ₹82,500, #2 Ananya Reddy — ₹76,200, #3 Arjun Kumar — ₹69,800) with interactive celebration effects.
- **⚡ Personalized "You" Highlighting**: 
  - Dynamic greeting bar in the Hero (*"Hey Aarav, you're currently Rank #14"*).
  - Electric blue neon glow and pulsing beacon on your table row.
  - Sticky floating personal rank widget at the bottom right with a *"Jump to My Rank"* shortcut.
- **🎯 Sprint Goal Tracker**: Live ₹50 Lakhs collective earning milestone progress bar with confetti celebrations.
- **🔍 Multi-Dimensional Search & Filtering**:
  - Search by student name, college, city, or niche skill.
  - 1-tap quick college hub filter pills (BMSCE, Christ, RVCE, PES, IIT Bombay).
  - Category dropdown filter (Full-Stack Dev, UI/UX, Performance Marketing, AI Automation, etc.).
  - Sort by Highest Income, Rank, Biggest Gainers, or Longest Streak.
  - Instant toggle between **⭐ Top 10** and **🌐 All Participants**.
- **📑 Student Details Modal**: Click on any participant to view their verified invoice receipts, client contracts breakdown, skill bio, and send celebratory cheers.
- **🏛️ Campus Ecosystem Leaderboard**: Compare collective earnings and student density across top Indian engineering and commerce colleges.
- **🎁 Prizes & Grants Showcase**: Breakdown of equity-free cash prizes (₹1.5L for #1), MacBook Air M3, and angel network introductions.
- **📱 Fully Responsive**: Tailored layout for seamless experience across mobile phones, tablets, and desktop displays.

---

## 🛠️ Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (Custom EYFI theme & glassmorphic surfaces)
- **Icons:** Lucide React
- **Celebrations:** Canvas Confetti
- **Typography:** Outfit & Plus Jakarta Sans (Google Fonts)
- **Deployment:** Netlify

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/eyfi-leaderboard.git
cd eyfi-leaderboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will be running at `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure

```
EYFI/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation, live status & profile chip
│   │   ├── Hero.jsx                # Title, stats cards & goal progress bar
│   │   ├── TopThree.jsx            # 3D Olympic podium for Top 3 winners
│   │   ├── Filters.jsx             # Search bar, college pills & sorters
│   │   ├── LeaderboardTable.jsx    # Table container & empty states
│   │   ├── LeaderboardRow.jsx      # Individual student row & highlight
│   │   ├── UserRankCard.jsx        # Floating personal rank card & jump CTA
│   │   ├── StudentDetailModal.jsx  # Student earnings & contract inspector
│   │   ├── CollegeRankings.jsx     # Campus collective earnings comparison
│   │   ├── PrizesSection.jsx       # Grants & perk tiers breakdown
│   │   └── Footer.jsx              # Branding, mission & resources
│   ├── data/
│   │   └── mockData.js             # Realistic mock participants & stats
│   ├── utils/
│   │   └── confetti.js             # Particle celebration helpers
│   ├── App.jsx                     # State management & tab orchestration
│   ├── index.css                   # Glassmorphism, animations & Tailwind base
│   └── main.jsx                    # Root entry point
├── index.html                      # HTML template & typography links
├── tailwind.config.js              # Custom brand palette & shadows
├── package.json
└── README.md
```

---

## 📄 License

Built for the **EYFI (Earn Your First Income)** Challenge.
