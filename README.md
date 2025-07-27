# Role-Based React App (Login + Protected Routes)

A minimal and efficient React + Vite application with login functionality and role-based access control.

---

## 🚀 Features

- 🔐 **Login Page** – Basic login form with role assignment
- 🔄 **AuthContext** – Global context to manage authentication state
- 🔒 **Protected Routes** – Routes accessible based on login and user role
- 👤 **User Roles** – Admin, Manager, and User access pages
- 🚫 **Unauthorized Page** – Shown when access is denied
- 🎨 **CSS Styling** – Basic styling via a `styles.css` file
- ⚡ **Fast Build** – Powered by [Vite](https://vitejs.dev/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

---

## 📦 Installation

```sh
git clone https://github.com/bharat-2004/LoginPage-react.git
cd your-repo-name
npm install
npm run dev
```

Visit the app at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
  components/
    Login.jsx
    ProtectedRoute.jsx
  context/
    AuthContext.jsx
  pages/
    Admin.jsx
    Manager.jsx
    User.jsx
    Unauthorized.jsx
  styles/
    styles.css
  App.jsx
  main.jsx
.gitignore
index.html
package.json
README.md
```

---

## 🧑‍💻 Usage

- **Login** with a selected role (Admin, Manager, or User)
- Based on role, you are routed to appropriate pages
- Unauthorized access redirects to the `Unauthorized` page
- Auth state is managed globally via `AuthContext.jsx`
- Route access is protected using `ProtectedRoute.jsx`

---

## ⚙️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- Context API

---

## 📜 License

MIT License – Free to use, modify, and share.
