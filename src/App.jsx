import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="main-categories" element={<MainCategory />} />

          <Route path="sub-categories" element={<SubCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
