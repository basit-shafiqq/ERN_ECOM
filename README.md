# 🛒 E-Commerce Web App

This is a modern e-commerce web application built using React, React Router, and Context API for state management. It allows users to browse products, add items to the cart, and manage their shopping experience seamlessly.

## 🚀 Features

- 🔍 Browse products with dynamic listing
- 🛒 Add/remove products from the cart
- 💰 View total cart items and total cart amount
- 🔑 User authentication (Login/Logout)
- 🏗 Responsive UI for both desktop and mobile devices

## 🏗 Tech Stack

- **Frontend:** React.js, React Router, Lucide React (for icons)
- **State Management:** Context API
- **Styling:** Tailwind CSS

## 📂 Project Structure
```
📦 project-root
├── 📂 src
│   ├── 📂 assets           # Images and static assets
│   ├── 📂 components       # Reusable UI components
│   ├── 📂 Context          # Global state using Context API
│   ├── 📂 pages            # Page components (Home, Cart, Login, etc.)
│   ├── 📜 App.js           # Main app component
│   ├── 📜 index.js         # ReactDOM entry point
├── 📜 README.md            # Project documentation
├── 📜 package.json         # Dependencies and scripts
└── 📜 .gitignore           # Git ignore rules
```

## 📦 Installation

1️⃣ **Clone the repository:**
```sh
 git clone https://github.com/basit-shafiqqyERN_ECOM.git
```

2️⃣ **Navigate to the project directory:**
```sh
 cd project-root
```

3️⃣ **Install dependencies:**
```sh
 npm install
```

4️⃣ **Run the development server:**
```sh
 npm run dev
```

The app will be available at `http://localhost:5173/` (if using Vite).

## 🎯 Usage

- Click on a product to view details.
- Add items to the cart and see the updated count in the header.
- Click on the cart icon to view and manage your cart.
- Login or Logout using the authentication button.


## 🐞 Troubleshooting
- Ensure that `ShopContextProvider` wraps your entire app in `index.js`.
- If `getTotalCartItems` throws an error, check if it's correctly provided in `ShopContext.js`.

## 📜 License
This project is licensed under the MIT License.

---
👨‍💻 Made with ❤️ by [BASIT]

