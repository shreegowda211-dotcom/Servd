<div align="center">

# 🍽️ Servd

**A full-stack recipe discovery & pantry management platform**

*Discover recipes · Manage your pantry · Smart meal planning with admin-powered content management*

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-CMS-2E7D32?style=flat-square&logo=strapi)](https://strapi.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square)](https://clerk.com/)

</div>

---

## 📖 About

Servd is a modern recipe discovery and pantry management platform built with Next.js and Strapi. Users can explore recipes filtered by category and cuisine, save their favorites, manage their pantry inventory, and plan meals. Admins manage content through Strapi's intuitive dashboard, ensuring quality recipe data with proper schema validation.

---

## ✨ Features

### 👤 Users
- **Authentication** — Seamless sign-in/sign-up with Clerk
- **Recipe Discovery** — Browse recipes by category and cuisine
- **Detailed Recipe View** — Ingredients, instructions, prep time, and cooking videos
- **Pantry Management** — Track pantry items and inventory
- **Saved Recipes** — Bookmark favorite recipes for quick access
- **Meal Planning** — Find recipes based on available pantry items
- **Responsive UI** — Works flawlessly on desktop, tablet, and mobile

### 🔐 Admins
- **Strapi Dashboard** — Manage all content types and data
- **Recipe Management** — Create, edit, and delete recipes with rich media support
- **Pantry Items** — Manage pantry categories and items
- **Saved Recipes** — Monitor user favorites and engagement
- **Schema Validation** — Content types with strict validation
- **Real-time Updates** — Changes immediately reflected on frontend

### 🌐 Public
- **Hero Section** — Featured recipes and platform highlights
- **Category Navigation** — Browse by meal type and cuisine
- **Search Functionality** — Find recipes quickly
- **Responsive Design** — Optimized for all devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14, React, TailwindCSS, Shadcn/UI |
| **UI/UX** | Responsive Design, Tailwind Components |
| **Backend** | Strapi Headless CMS, Node.js |
| **Database** | PostgreSQL |
| **Authentication** | Clerk Auth |
| **API** | RESTful API (Strapi) |
| **File Uploads** | Strapi Media Library |
| **Deployment** | Vercel (Frontend), Railway/Render (Backend) |

---

## 📁 Project Structure

```
Servd/
├── frontend/                  # Next.js App
│   ├── app/
│   │   ├── (auth)/           # Authentication pages (sign-in, sign-up)
│   │   ├── (main)/           # Main application routes
│   │   │   ├── dashboard/    # User dashboard
│   │   │   ├── pantry/       # Pantry management
│   │   │   ├── recipe/       # Recipe detail pages
│   │   │   └── recipes/      # Recipe browsing & filters
│   │   ├── layout.js         # Root layout
│   │   └── page.jsx          # Home page
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeGrid.jsx
│   │   ├── AddToPantryModal.jsx
│   │   └── ui/               # Shadcn UI components
│   ├── actions/              # Next.js server actions
│   │   ├── recipe.actions.js
│   │   ├── pantry.actions.js
│   │   └── mealdb.actions.js
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and helpers
│   ├── public/               # Static assets
│   └── package.json
│
└── backend/                   # Strapi CMS
    ├── src/
    │   ├── api/              # API endpoints
    │   │   ├── recipe/       # Recipe content type
    │   │   ├── pantry-item/  # Pantry item content type
    │   │   └── saved-recipe/ # User saved recipes
    │   ├── extensions/       # Strapi extensions
    │   │   └── users-permissions/
    │   └── index.js
    ├── config/               # Strapi config
    │   ├── database.js
    │   ├── server.js
    │   ├── middlewares.js
    │   └── plugins.js
    ├── public/               # Static files & uploads
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- PostgreSQL database
- Clerk account (for authentication)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/servd.git
cd servd
```

---

### 2. Backend Setup (Strapi)

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=servd
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false
JWT_SECRET=your_jwt_secret_here
```

Initialize the database and start Strapi:

```bash
# Development with hot-reload
npm run develop

# Production
npm run build
npm run start
```

Strapi Admin will be available at `http://localhost:1337/admin`

---

### 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
```

Create a `.env.local` file in `frontend/`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`.

---

## 🔌 API Endpoints

### Recipes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/recipes` | Get all recipes |
| GET | `/api/recipes/:id` | Get recipe details |
| POST | `/api/recipes` | Create recipe (Admin) |
| PUT | `/api/recipes/:id` | Update recipe (Admin) |
| DELETE | `/api/recipes/:id` | Delete recipe (Admin) |

### Pantry Items
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pantry-items` | Get all pantry items |
| GET | `/api/pantry-items/:id` | Get pantry item details |
| POST | `/api/pantry-items` | Create pantry item (Admin) |
| PUT | `/api/pantry-items/:id` | Update pantry item (Admin) |
| DELETE | `/api/pantry-items/:id` | Delete pantry item (Admin) |

### Saved Recipes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/saved-recipes` | Get user's saved recipes |
| POST | `/api/saved-recipes` | Save a recipe |
| DELETE | `/api/saved-recipes/:id` | Remove saved recipe |

---

## 🌍 Deployment

### Frontend → [Vercel](https://vercel.com)

1. Connect your GitHub repository to Vercel
2. Set root directory to `frontend`
3. Add environment variables:
   ```
   NEXT_PUBLIC_STRAPI_URL=your_deployed_backend_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   ```
4. Deploy — Vercel handles Next.js automatically

### Backend → [Railway](https://railway.app) or [Render](https://render.com)

1. Create new project, connect GitHub repository
2. Set root directory to `backend`
3. Build command: `npm install && npm run build`
4. Start command: `npm run start`
5. Add environment variables:
   ```
   DATABASE_CLIENT=postgres
   DATABASE_HOST=your_database_host
   DATABASE_PORT=5432
   DATABASE_NAME=servd
   DATABASE_USERNAME=your_db_user
   DATABASE_PASSWORD=your_db_password
   JWT_SECRET=your_jwt_secret
   ```

### Database → [Railway](https://railway.app) PostgreSQL

1. Create PostgreSQL service on Railway
2. Copy connection string as `DATABASE_HOST`, extract other credentials
3. Strapi will auto-migrate on first deploy

---

## 📸 Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with featured recipes |
| `/recipes` | Browse all recipes |
| `/recipes/category/[category]` | Filter recipes by category |
| `/recipes/cuisines/[cuisine]` | Filter recipes by cuisine |
| `/recipe/[id]` | Recipe detail page |
| `/pantry` | User's pantry management |
| `/dashboard` | User dashboard |
| `/sign-in` | User login |
| `/sign-up` | User registration |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shree Gowda** — Full Stack Developer

- GitHub: [@ShreeGowda](https://github.com/shreegowda211-dotcom)
<!-- - Portfolio: [yourportfolio.com](https://yourportfolio.com) -->

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star!

Made with ❤️ by **Shree Gowda**

</div>
