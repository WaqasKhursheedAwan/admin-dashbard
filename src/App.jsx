import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
import Bookings from "./pages/Bookings";
import CustomersSupport from "./pages/CustomersSupport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="main-categories" element={<MainCategory />} />

          <Route path="sub-categories" element={<SubCategory />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="customer-support" element={<CustomersSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
