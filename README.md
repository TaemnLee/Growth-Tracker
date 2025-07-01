# 🌱 Growth Tracker

**Growth Tracker** is a personalized self-growth platform designed to help users reflect weekly, build habits, and receive AI-generated feedback on their journey. Built with Next.js, TypeScript, and MongoDB, it combines the power of structured journaling, habit tracking, and gamification to promote personal growth.

---

## 🎯 Project Goal

Create a personalized web platform to:
- Write weekly reflections with AI-powered feedback
- Track habits and goals over time
- Gamify self-growth through streaks, tasks, and points
- Promote consistent reflection with smart prompts and summaries

---

## ✅ Core Features (Phase 1 MVP)

- **User Authentication** – Secure login/signup system with session-based access control
- **Weekly Reflections** – Markdown-supported editor to write reflections and save them to MongoDB
- **Reflection History Dashboard** – View/edit past reflections by date
- **Responsive UI** – Mobile-friendly layout built with TailwindCSS

> _✅ Note: As of June 2025, backend API, MongoDB integration, and basic reflection submission are complete._

---

## 🧠 AI-Enhanced Features (Post-Core)

- **AI Feedback** – Generate motivational comments per reflection using OpenAI API
- **Tone Analysis** – Detect emotions like "stressed", "grateful", "excited"
- **Summary Generator** – Create TL;DR-style paragraph for each reflection

---

## ✨ Features to Be Added

- 🏷️ Tags or Categories – Organize reflections by topic
- 🔥 Streak Tracker – Visual indicator of reflection consistency
- 📥 Export Feature – Download reflections as Markdown or PDF
- 📈 Timeline View – Visualize growth over time
- 🔒 Private Notes – Option to keep entries private
- ⚙️ Admin Dashboard – For managing users/reflections
- 📊 Habit Tracker – Track habits in a calendar-like interface
- 📅 Daily Tasks & Goals – Write and check off tasks for gamification
- 🎮 Gamification – Earn points/badges for consistent reflection
- 💡 Journaling Prompts – Smart prompts to guide writing
- 💬 Commenting – Add notes on past reflections

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (App Router), MongoDB
- **AI Services**: OpenAI API (planned)
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (recommended)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # App-wide layout and fonts
│   ├── page.tsx             # Homepage with reflection editor
│   └── globals.css          # Global theme & style variables
├── components/
│   └── ReflectionEditor.tsx # UI to write and submit reflections
├── lib/
│   └── mongodb.js           # MongoDB connection helper
├── pages/
│   └── api/
│       └── reflections.js   # API route to handle GET/POST reflections
```

---

## 🧪 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/<your-username>/growth-tracker.git
cd growth-tracker
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root of the project:

```env
MONGODB_URI=your-mongodb-connection-uri
```

### 3. Start the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✍️ Author

**Taemin Lee**  
Built with 💻, ☕, and a growth mindset.
