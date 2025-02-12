## ## commands:
- npm i
- npm start


## Most Used Folder Structure
```javascript
React Folder Structure
.
├── public
├── src
|    ├── assets
|    |     ├── icons
|    |     └── images
|    ├── components
|    |     ├── Button
|    |     |     └── index.jsx
|    |	   ├── inputs
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── layout
|    |     ├── Header
|    |     |     └── index.jsx
|    |     ├── Navbar.jsx
|    |     |     └── index.jsx
|    |     ├── Footer.jsx
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── pages
|    |     ├── Home
|    |     |     └── index.jsx
|    |     ├── Login
|    |     |     └── index.jsx
|    |     ├── Signup
|    |     |     └── index.jsx
|    |     ├── About
|    |     |     └── index.jsx
|    |     ├── Error
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── Routers
|    |     └── Routers.jsx
|    ├── store
|    |     ├── slices
|    |     |     ├── featureSlice1.js
|    |     |     └── featureSlice2.js
|    |     ├── rootReducer.js  
|    |     └── store.js
|    ├── services
|    |     ├── api.js                 // API request functions
|    |     └── dataUtils.js           // Data manipulation functions
|    ├── utils
|    |     ├── constants
|    |     |     ├── Strapi.js        // Example
|    |     |     └── Firebase.js      // Example
|    |     ├── helpers
|    |     |     ├── arrays.js        // Example
|    |     |     └── helpers.js       // Example
|    |     └── hooks  
|    |           └── useIsMobile.js   // Example
|    ├── App.jsx
|    ├── index.css
|    └── main.jsx
|
├── .gitignore
├── index.html
├── .env
├── package-lock.json
├── package.json
├── README.md
└── ...                               // Configuration Files
```

## Folders include

- `public`       : Contains static assets like the HTML entry point and other files.
- `assests`      : Houses icons and images used throughout the application.
- `components`   : Reusable UI components organized by type.
- `layout`       : Reusable layout components.
- `pages`        : Individual pages or views of your app.
- `Routers`      : Defines the routing structure of the app.
- `services`     : API Operations
- `store`        : Redux store setup and state management.
- `utils`        : General utility functions and constants.
  - `Constants`    : Constants used throughout the app (e.g., API endpoints).
  - `helpers`      : Helper functions for various tasks.
  - `hooks`        : Custom React hooks (e.g., useIsMobile).
- `.env`
- `.eslintrc.cjs`
- `.prettierrc.cjs`
- `.gitignore`
- `package.json`
- `.vite.config.js`