# StyleSphere - Modern Fashion E-Commerce Website Replica

A pixel-perfect replica of the **StyleSphere** fashion e-commerce web application, built independently as part of the **NxtWave Academy Career Plus Webclone Internship**.

- **Reference Website**: [https://stylesphere.ccbp.tech/](https://stylesphere.ccbp.tech/)
- **GitHub Repository**: [https://github.com/vishal-s-sollapure/StyleSphere.git](https://github.com/vishal-s-sollapure/StyleSphere.git)

---

## 📌 Project Overview

**StyleSphere** is a modern, responsive Single Page Application (SPA) designed for online fashion shopping. It features a curated product catalog, dynamic filtering engine, product gallery viewer, persistent cart & wishlist management, user profile dashboard, and a 3-step accordion checkout process.

---

## 🚀 Key Features

### 1. Single Page Application (SPA) Architecture
- Smooth dynamic view switching (`Home`, `Shop`, `Product Detail`, `Cart`, `Checkout`, `Profile`, `Wishlist`) without full page reloads.

### 2. Catalog & Interactive Filter Engine
- Multi-brand checkbox filter (*Nike*, *Adidas*, *Levi's*, *Zara*, *Coach*, *Max Mara*, *Daniel Wellington*).
- Interactive maximum price range slider ($0 to $500).
- Clothing and shoe size filters.
- Active filter pill badges with instant removal and a single-click "Clear All" reset.
- Product sorting options (*Featured*, *Newest*, *Price: Low to High*, *Price: High to Low*, *Top Rated*).

### 3. Product Details Page
- High-resolution main image viewer with interactive thumbnail switching.
- Star ratings and customer review counters.
- Color swatch selector and size dropdown menu.
- Quantity counter (`-` / `+`).
- Tabbed interface (*Description*, *Specifications*, *Reviews*).
- "You May Also Like" related product recommendations.

### 4. Shopping Cart & Checkout
- Persistent cart state using `localStorage`.
- Dynamic subtotal, shipping fee calculation ($9.99 or Free for orders > $100), and free shipping progress notification.
- Creative Liberty Promo Code Engine: supports coupons like `STYLES50` (50% off) and `FREESHIP`.
- 3-step checkout wizard (*1. Shipping Address*, *2. Payment Method*, *3. Order Review*).

### 5. User Profile & Wishlist
- User profile dashboard displaying account details, loyalty status badge, and recent order history table.
- Dedicated Wishlist view to save and manage favorite items.

### 6. Responsive Design
- Mobile-first approach with slide-out navigation menu and bottom filter sheet for mobile screens (`< 768px`).

---

## 🛠️ Technology Stack

- **HTML5**: Semantic document layout (`header`, `nav`, `main`, `section`, `aside`, `footer`).
- **CSS3**: Custom design system using CSS root variables (`--primary`, `--background`, `--card`, `--foreground`, `--muted`, `--border`, `--radius`) and Google Font `'Work Sans'`.
- **Vanilla JavaScript (ES6)**: Modular event-driven state management, DOM manipulation, and `localStorage` API.

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vishal-s-sollapure/StyleSphere.git
   cd StyleSphere
   ```

2. **Serve the project**:
   - Open `index.html` directly in your browser, or
   - Use a simple HTTP server:
     ```bash
     npx http-server -p 3000
     ```
   - Visit `http://localhost:3000` in your browser.

---

## 📝 Evaluation Criteria Alignment

| Criteria | Weight | Implementation Highlights |
| :--- | :---: | :--- |
| **Accuracy / Similarity** | **70%** | Replicated navbar, hero banner, category cards, featured products, promo section, features bar, catalog sidebar, product detail layout, cart, checkout, profile, and footer. |
| **Code Quality** | **15%** | Framework-free semantic HTML, CSS design system tokens, clean modular JS functions. |
| **Problem Solving** | **10%** | SPA routing, cart math engine, filter logic, local storage state persistence. |
| **Creative Liberty** | **5%** | Live header search, promo code engine (`STYLES50`, `FREESHIP`), and user profile section. |

---

## 👤 Author

**Vishal S Sollapure**  
NxtWave Academy Webclone Internship Submission  
GitHub: [@vishal-s-sollapure](https://github.com/vishal-s-sollapure)
