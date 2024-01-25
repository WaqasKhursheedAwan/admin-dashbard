import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineCog,
} from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineCube />,
  },
  {
    key: "employees",
    label: "Employees",
    path: "/employees",
    icon: <FaUsers />,
  },
  {
    key: " maincategories ",
    label: " Main Categories ",
    path: "/main-categories",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "subcategories",
    label: "Sub categories",
    path: "sub-categories/",
    icon: <HiOutlineUsers />,
  },
  {
    key: "bookings",
    label: "Bookings",
    path: "/bookings",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "customersupport",
    label: "Customer support",
    path: "/customer-support",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
