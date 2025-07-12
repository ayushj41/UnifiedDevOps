
# 🚀 DevFlow Dashboard: Your Workflow, Supercharged!

Welcome to **DevFlow Dashboard** – your all-in-one developer control center. Built with ❤️, caffeine ☕, and a sprinkle of AI magic 🤖, this project unifies your dev stack into a **single pane of glass**. No more tab hopping between Rally, Azure DevOps, GitLab, Jenkins, or AWS — just flow.

---

## 🎯 The Vision: DevOps + AI = DevFlow

Inspired by an old-school sketch and a modern need for clarity, this dashboard aims to:

- 📝 Track User Stories (from Rally/Azure Boards)
- ⚙️ Monitor CI/CD health (GitLab, Azure DevOps)
- 📦 Manage Releases (Current & Upcoming)
- 📈 Visualize Roadmaps & Feature Progress
- 🤖 Get AI-powered alerts, suggestions & automation

> Currently in 🧪 development. Frontend is running with mock data. Backend API is actively being built using `.NET Core`.

---

## 🖼️ Screenshot (UI Preview)

> 🎨 Current frontend using mock data. Final UI will include live build/release states.

![Dashboard Mock UI](./assets/devflow-ui-snapshot.png)

---

## 🗺️ Project Architecture

```
/UnifiedDevOps
├── frontend/            # React + Tailwind (UI Ready w/ mock data)
│   ├── components/
│   └── mock/            # Local mock JSON simulating API data
│
├── backend/             # .NET Core (in development)
│   ├── Controllers/
│   └── Services/
│
└── assets/              # Images, diagrams, UI snapshots
```

---

## 🤖 Quirky Characters in Action

| Name                | What They Do                                                 |
|---------------------|--------------------------------------------------------------|
| 🧙‍♂️ Mocky McMockface | Pretends to be your CI/CD + story APIs                      |
| 🛠️ Build-o-tron       | (Coming soon!) Triggers pipelines from the dashboard        |
| 🧠 Copilot Whisperer  | (Coming soon!) AI agent that diagnoses build failures        |
| 🧪 Token Gobbler      | Safely stores OAuth tokens per tool (GitLab, Azure, etc.)   |

---

## ⚙️ Tech Stack

| Layer       | Tech               |
|-------------|--------------------|
| Frontend    | React + Tailwind CSS |
| Backend     | ASP.NET Core Web API (WIP) |
| Auth        | Okta OAuth + Google/GitHub/Facebook |
| DevOps APIs | GitLab, Azure DevOps, Jenkins, AWS |
| AI Layer    | Python-based (planned), future GPT/OpenAI agent |

---

## 📦 Installation

### ✅ Frontend (Mock Mode)

```bash
git clone https://github.com/ayushj41/UnifiedDevOps.git
cd UnifiedDevOps/frontend
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

### ⚠️ Backend (Under Construction 👷)

The backend is being built in **ASP.NET Core** and will soon support:

- GitLab + Jenkins pipeline management
- Rally + Azure Boards story status sync
- Okta OAuth + multi-tool token storage
- API endpoints for releases, builds, and roadmap

🚧 Sample WIP API structure:
```http
GET    /api/stories             // List user stories
POST   /api/integrations/link   // Link GitLab / Azure / Jenkins
POST   /api/pipeline/trigger    // Trigger a CI/CD job
GET    /api/status/builds       // Fetch build health
```

Stay tuned for `.swagger.json` / OpenAPI docs soon.

---

## 🧠 AI & Automation Plans

| Feature | Description |
|--------|-------------|
| Smart Status Sync | Auto-update Rally stories based on pipeline/PR status |
| Build Copilot | Analyze pipeline failures, suggest fixes |
| Feedback Insights | Analyze and categorize release feedback |
| Risk Radar | Predict delays & stalls based on user story flow and builds |
| Release Genie | Auto-generate release readiness & draft notes |

---

## 💻 Terminal Snippets (Preview)

```bash
$ python sync_rally_data.py --sprint "Sprint 2025-Q3"
Fetching User Stories from Rally...
✨ US-101 (Implement Auth) status: In Progress
✨ US-102 (Design Landing Page) status: Completed
✅ Synced 3 stories with dashboard.

---

$ dotnet run --project backend/
Launching DevFlow API on http://localhost:5000
🔒 Okta JWT Auth Enabled
🎯 Webhooks endpoint registered: /api/hooks/gitlab
```

---

## 📅 Roadmap

- [x] Frontend UI with mocked flows
- [ ] GitLab OAuth linking flow
- [ ] Azure DevOps Sprint integration
- [ ] .NET Core backend scaffolding
- [ ] CI/CD pipeline triggering
- [ ] AI insights on builds/releases
- [ ] Central OAuth token store (Okta + tool accounts)

---

## 🤝 Contributing

We’d love to have you on board!  
Stay tuned for `CONTRIBUTING.md` — or just [open an issue](https://github.com/ayushj41/UnifiedDevOps/issues) to say hi. 🎉

---

## 📄 License

MIT License. Use it, fork it, improve it, remix it. Just don’t forget to star 🌟 it!

---

## ✨ Final Thoughts

> _“One dashboard to rule them all, one pane to bind them.”_  
> DevFlow is your future-proof DevOps visibility layer. Whether you’re pushing pixels or pipelines, it’s got your back.

---

Made with 💥 by [@ayushj41](https://github.com/ayushj41) and a cast of imaginary tech characters 🧙‍♂️🛠️🧠
