# Admin Dashboard

A modern React-based admin dashboard application with role-based navigation and user management.

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Top navigation bar with logout and profile
│   │   ├── Navbar.css
│   │   ├── Sidebar.js         # Sidebar with menu and user info
│   │   └── Sidebar.css
│   ├── pages/
│   │   ├── Admin.js           # Main admin dashboard page
│   │   └── Admin.css
│   ├── App.js                 # Main app component with routing
│   ├── App.css
│   └── index.js               # React entry point
├── package.json
└── README.md
```

## Features

### ✅ Completed
- ✓ Git repository initialized with master and develop branches
- ✓ Admin route (`/admin`)
- ✓ Navbar with Logout & Profile buttons positioned on the right
- ✓ Sidebar with:
  - Logo at the top
  - Menu items: Home, Orders, Transaction, Categories, Users, Customers
  - User information (Name & Email) at the bottom

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

Navigate to `/admin` to see the admin dashboard with the navbar and sidebar.

### Git Branches

- **master**: Production branch
- **develop**: Development branch (currently active for all new features)

## Components

### Navbar
- Displays app title
- Shows user profile button
- Logout button on the right side
- Current logged-in user name displayed

### Sidebar
- Logo icon and text at the top
- Navigation menu with 6 items:
  - 🏠 Home
  - 📦 Orders
  - 💳 Transaction
  - 📂 Categories
  - 👥 Users
  - 🛍️ Customers
- User information (Avatar, Name, Email) at the bottom

### Admin Page
- Combines Navbar and Sidebar
- Main content area for admin features

## Styling

The application uses modern CSS with:
- Responsive flexbox layouts
- Color scheme: Professional blue/gray theme
- Hover effects and transitions
- Mobile-friendly design considerations

## User Data

Currently using mock user data:
- Name: John Doe
- Email: john.doe@example.com

Update the `Admin.js` page to fetch real user data from your backend.
