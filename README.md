# 🛒 ShopApp

A full-stack e-commerce application built with **Angular**, **Node.js**, **TypeScript**, and **SQLite**.

![ShopApp](https://img.shields.io/badge/Angular-21-red) ![Node.js](https://img.shields.io/badge/Node.js-24-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![SQLite](https://img.shields.io/badge/SQLite-3-lightblue)

---

##  Features

- Browse a product catalogue with images
- View detailed product information
- Add products to a shopping cart
- Live cart badge showing item count
- Cart page with item management and total
- Checkout page with order confirmation
- Data persisted in a SQLite database
- Product images served locally from Express

---

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 21 |
| Backend | Node.js + Express |
| Language | TypeScript (both sides) |
| Database | SQLite (better-sqlite3) |
| Styling | CSS with responsive grid |

---

##  Project Structure

```
ecommerce/
├── backend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/          # Product images
│   │   ├── models/
│   │   │   └── product.model.ts # Product TypeScript interface
│   │   ├── routes/
│   │   │   └── products.routes.ts # API route handlers
│   │   ├── database.ts          # SQLite setup and table creation
│   │   ├── seed.ts              # Sample product data
│   │   └── index.ts             # Server entry point
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   └── app/
    │       ├── components/
    │       │   ├── product-list/    # Products grid page
    │       │   ├── product-detail/  # Single product page
    │       │   ├── cart/            # Shopping cart page
    │       │   └── checkout/        # Checkout page
    │       ├── models/
    │       │   └── product.ts       # Product interface
    │       ├── services/
    │       │   ├── product.ts       # HTTP calls to backend
    │       │   └── cart.ts          # Cart state management
    │       ├── app.ts               # Root component
    │       ├── app.html             # App shell with navbar
    │       ├── app.css              # Global styles
    │       ├── app.routes.ts        # Angular routing
    │       └── app.config.ts        # App configuration
    └── package.json
```

---

##  Getting Started

### Prerequisites

- Node.js v18+
- Angular CLI: `npm install -g @angular/cli`

### Run the Backend

```bash
cd backend
npm install
npm run dev
```

API available at: `http://localhost:3000`

### Run the Frontend

```bash
cd frontend
npm install
ng serve
```

App available at: `http://localhost:4200`

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a single product |
| GET | `/images/:filename` | Serve a product image |

---

##  Data Model

```typescript
interface Product {
  id: number;          // Auto-incremented
  name: string;        // Product name
  description: string; // Product description
  price: number;       // Price in dollars
  image: string;       // Image URL
  category: string;    // E.g. Electronics, Sports
}
```

---

##  Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Product List | Homepage with all products |
| `/products` | Product List | Browse all products |
| `/products/:id` | Product Detail | Single product view |
| `/cart` | Cart | View and manage cart items |
| `/checkout` | Checkout | Order summary and confirmation |

---

##  Key Concepts

| Concept | Where Used |
|---------|-----------|
| Angular Router | Multi-page navigation |
| Multiple Components | Each page is its own component |
| BehaviorSubject | Sharing cart state across components |
| ActivatedRoute | Reading URL parameters |
| HttpClient | HTTP requests from Angular to Node |
| SQLite | Relational database with SQL queries |
| Static file serving | Product images served from Express |
| object-fit: cover | Uniform image sizing with CSS |

---

##  Possible Improvements

- [ ] Search and filter products
- [ ] User authentication with JWT
- [ ] Checkout form with name and address
- [ ] Order history saved to database
- [ ] Admin panel for managing products
- [ ] Payment processing with Stripe
- [ ] Migrate to PostgreSQL or MongoDB
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway

---

##  License

MIT — free to use and modify.

---

*Built as a full-stack learning project using Angular, Node.js, and TypeScript.*
