import React, { useState } from "react";
import { MdInfo } from "react-icons/md";
import Modal from "react-modal";
import { getOrderStatus } from "../lib/helpers";
import MapComponent from "./MapComponent";

const customerDetails = {
  name: "John Doe",
  customer_email: "john@gmail.com",
  phone_number: "111-111-111",
  address: "123 Main St, Cityville",
  is_urgent: "true",
  categories: [
    {
      categoryName: "Category A",
      subcategories: ["Subcategory A1", "Subcategory A2", "Subcategory A3"],
    },
    // {
    //   categoryName: "Category B",
    //   subcategories: ["Subcategory B1", "Subcategory B2", "Subcategory B3"],
    // },
  ],
  title: "ABCD",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
};

const uploadedPictures = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/250",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/250",
];

const recentBookings = [
  {
    id: "1",
    current_booking_status: "Placed",
    product: "T-shirts",
    customerName: "John Doe",
    bookingId: "B12345",
    bookingDate: "2024-01-28",
  },
  {
    id: "2",
    current_booking_status: "Pending",
    product: "Shirt",
    customerName: "Jane Smith",
    bookingId: "B12346",
    bookingDate: "2024-01-29",
  },
  {
    id: "3",
    current_booking_status: "Cancelled",
    product: "Denim Pant",
    customerName: "Bob Johnson",
    bookingId: "B12347",
    bookingDate: "2024-01-30",
  },
];

const Bookings = () => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setIsModalOpen(false);
  };

  const filteredBookings = recentBookings.filter(
    (booking) =>
      filterStatus === "All" || booking.current_booking_status === filterStatus
  );

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between mb-2 ">
        <strong className="text-gray-700 font-medium"> Booking Details </strong>
        <select
          className="border-2 border-neutral-300 rounded-md text-lg pl-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Placed">Placed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="text-center">Booking ID</th>
              <th className="text-center">Booking Date</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Address</th>
              <th className="text-center">Status</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="text-center">{booking.bookingId}</td>
                <td className="text-center">{booking.bookingDate}</td>
                <td className="text-center">{booking.product}</td>
                <td className="text-center">{booking.customerName}</td>
                <td className="text-center">{customerDetails.address}</td>
                <td className="text-center">
                  {getOrderStatus(booking.current_booking_status.toUpperCase())}
                </td>
                <td className="text-center">
                  <MdInfo
                    onClick={() => handleInfoClick(booking)}
                    className="cursor-pointer"
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Information"
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        overlayClassName="modal-overlay"
      >
        {selectedBooking && (
          <div className="bg-white p-4 rounded-md relative w-[95%] h-[85%] flex">
            <div className="flex-1 border-r pr-2 ">
              {/* Customer details */}
              <h2 className="text-lg font-semibold mb-2 ">Customer Details</h2>
              <p className="text-lg  pt-2 font-medium mb-2 ">
                Name:
                <span className="ml-2 font-normal ">
                  {customerDetails.name}
                </span>
              </p>
              <p className="text-lg  font-medium mb-2">
                Email:{" "}
                <span className="ml-2 font-normal">
                  {customerDetails.customer_email}
                </span>
              </p>
              <p className="text-lg  font-medium mb-2">
                Phone Number:{" "}
                <span className="ml-2 font-normal">
                  {customerDetails.phone_number}
                </span>
              </p>
              <p className="text-lg  font-medium mb-2">
                Address:
                <span className="ml-2 font-normal">
                  {customerDetails.address}
                </span>
              </p>
              <p className="text-lg  font-medium mb-2">
                Urgent Booking:{" "}
                <span className="ml-2 font-normal">
                  {customerDetails.is_urgent}
                </span>
              </p>
              <p className="text-lg  font-medium mt-1 mb-2">
                Title:{" "}
                <span className="ml-2 font-normal">
                  {customerDetails.title}
                </span>
              </p>
              <p className="text-lg  font-medium">
                Description:{" "}
                <span className="ml-2 font-normal">
                  {customerDetails.description}
                </span>
              </p>

              {/*  categories and subcategories */}
              {customerDetails.categories.map((category, index) => (
                <div key={index} className="mt-4 mb-1">
                  <h3 className="text-lg font-medium">
                    {category.categoryName}
                  </h3>
                  <ul className="list-disc ml-6 ">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>{subcategory}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Map component */}
            <div className="flex-1 border-r pl-4 pr-4">
              <h2 className="text-lg font-medium mb-2">Map Location</h2>
              <MapComponent />
            </div>
            {/* Pictures */}
            <div className="flex-1 pl-4">
              <h2 className="text-lg font-medium mb-2">Pictures</h2>
              <div className="flex flex-wrap">
                {uploadedPictures.map((picture, index) => (
                  <img
                    key={index}
                    src={picture}
                    alt=""
                    className="mr-2 mb-2 rounded-md"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Bookings;
