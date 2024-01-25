import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
import Bookings from "./pages/Bookings";
import CustomersSupport from "./pages/CustomersSupport";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Employees from "./pages/Employees";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Layout onLogout={handleLogout} />}>
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="employees" element={<Employees />} />
            <Route path="main-categories" element={<MainCategory />} />
            <Route path="sub-categories" element={<SubCategory />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="customer-support" element={<CustomersSupport />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        <Route path="login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
