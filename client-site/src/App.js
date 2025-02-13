import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/Login/login"; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen items-center justify-center">
        <nav className="mb-4">
          <Link to="/login" className="text-blue-500 underline">Go to Login</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
