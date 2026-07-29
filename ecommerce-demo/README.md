# Shoply — React E-commerce Demo

A clean, frontend-only e-commerce demo built with React 18, React Router 6, Vite and Tailwind CSS.
No backend, no real payments — the catalogue is static data and the cart persists in `localStorage`.

## Features
- **Product listing** — search, category filters, sorting (price / rating), responsive grid
- **Product details** — gallery image, features, stock state, quantity picker, related products
- **Cart** — quantity editing, remove/clear, live totals, persisted across reloads
- **Checkout** — validated shipping + payment form, order summary, simulated order placement
- **Order confirmation** — generated order id and receipt summary

## Run it
```bash
cd ecommerce-demo
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Structure
```
src/
  App.jsx                 routes + layout
  context/CartContext.jsx cart state (useReducer + localStorage) and price helpers
  data/products.js        static product catalogue
  components/             Navbar, ProductCard, Rating, OrderSummary, EmptyState
  pages/                  ProductList, ProductDetails, Cart, Checkout, OrderConfirmed
```
