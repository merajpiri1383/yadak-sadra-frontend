# Yadak Sadra Frontend

A modern e-commerce frontend application designed for an auto parts store ("Yadak Sadra"). This project is built using **Next.js 15** and **TypeScript**, utilizing a robust stack of libraries for state management, data fetching, and UI styling.

## 🚀 Tech Stack

  * **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Styling:**
      * [Tailwind CSS v4](https://tailwindcss.com/)
      * [Styled Components](https://styled-components.com/)
  * **State Management:** [Zustand](https://github.com/pmndrs/zustand) (Persisted store for layout/user data)
  * **Data Fetching:** [TanStack React Query v5](https://tanstack.com/query/latest)
  * **HTTP Client:** [Axios](https://axios-http.com/) (Configured with interceptors for auth tokens)
  * **Authentication:** Custom implementation using Cookies (`js-cookie`) and JWT
  * **UI Libraries:**
      * [Swiper](https://swiperjs.com/) (Carousels)
      * [React Toastify](https://github.com/fkhadra/react-toastify) (Notifications)
      * [React Awesome Reveal](https://github.com/morellodev/react-awesome-reveal) (Animations)
      * [React OTP Input](https://github.com/devfolioco/react-otp-input) (OTP handling)

## ✨ Features

  * **Dynamic Home Page:** Includes a promotional slider, brand showcase, and product categories.
  * **Product Catalog:** Category-based product listing with client-side filtering (Brand, Country) and sorting.
  * **Shopping Cart:**
      * Global cart management with add/remove functionality.
      * Interactive cart popup in the header.
      * Cart summary page with price calculation.
  * **Authentication:**
      * Login with Password or OTP.
      * Registration flow with OTP verification.
      * Protected user sessions using Access/Refresh tokens.
  * **Responsive Design:** Fully responsive layouts built with Tailwind CSS grid and flexbox systems.
  * **Custom Fonts:** Integrated local Persian fonts (Yekan Bakh).

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

  * Node.js (Version 18+ recommended based on Next.js 15 requirements)
  * npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/merajpiri1383/yadak-sadra-frontend.git
    cd yadak-sadra-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open the application:**
    Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

## 📂 Project Structure

```
yadak-sadra-frontend/
├── app/                 # Next.js App Router directory
│   ├── auth/            # Authentication pages (Login, Register)
│   ├── cart/            # Shopping cart pages and components
│   ├── components/      # Page-specific components (Home, etc.)
│   ├── product/         # Product listing and details
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with Providers
│   └── page.tsx         # Home page entry point
├── components/          # Reusable UI components
│   ├── footer/          # Footer components
│   ├── header/          # Header, Search, and User Actions
│   ├── icons/           # SVG Icon components
│   └── types/           # TypeScript type definitions
├── lib/                 # Utility functions and API configurations
│   ├── api/             # API call functions (Auth, Cart, Product)
│   ├── store/           # Zustand store definitions
│   └── axios.tsx        # Axios instance and interceptors
├── public/              # Static assets (Images, Fonts, Icons)
└── ...config files      # (next.config.ts, tailwind.config, etc.)
```

## ⚙️ Configuration

The project uses a custom `axios` instance configured in `lib/axios.tsx` which points to `http://localhost:8000` by default. To change the API backend URL, update the `baseURL` in that file or utilize environment variables.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.