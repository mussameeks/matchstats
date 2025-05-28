# ⚽ Match Stats SPA

A clean and modern **Single Page Application (SPA)** built with React, providing live, finished, and upcoming football match stats. Currently using local `dummydata.json` for preview.

## 🚀 Live Demo

🌐 [match-stats.vercel.app](https://match-stats.vercel.app) *(customizable — see below)*

## 🛠 Tech Stack

- ⚛️ React
- 🌐 React Router DOM
- 💅 CSS (custom styling)
- 📁 JSON (dummy match data)
- ☁️ Vercel for deployment

## 📂 Project Structure

```
match-stats-spa/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── index.js
└── README.md
```

## 🧪 Features

- View **Live**, **Finished**, and **Upcoming** matches
- Clean navigation and routing with `react-router-dom`
- Individual **Match Details** pages
- Preview with local dummy data

## 🧰 Getting Started

```bash
git clone https://github.com/your-username/match-stats-spa.git
cd match-stats-spa
npm install
npm start
```

## 🧪 Dummy Data Example

```json
{
  "id": "1",
  "teams": { "home": "Real Madrid", "away": "Barcelona" },
  "status": "live",
  "score": { "home": 2, "away": 1 },
  "startTime": "2025-05-28T18:00:00Z",
  "league": "La Liga"
}
```

## 🌍 Custom Domain (Vercel)

After deployment on Vercel, go to your project settings and update the domain under the **Domains** section.

---

## 👨‍💻 Author

**[Your Name]** — Built for learning and fun ✨  
📧 YourEmail@example.com  
🔗 [GitHub](https://github.com/your-username)
