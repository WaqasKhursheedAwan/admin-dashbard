import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineCog,
} from "react-icons/hi";

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
    key: " maincategories ",
    label: " Main Categories ",
    path: "/maincategories",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "subcategories",
    label: "Sub categories",
    path: "/sub-categories",
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
