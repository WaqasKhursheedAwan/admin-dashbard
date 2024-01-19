import React, { useState } from "react";
import { getOrderStatus } from "../lib/helpers";

const recentBookings = [
  {
    id: "1",
    current_booking_status: "Placed",
    product: "T-shirts",
    subcategory: "T-shirts",
  },
  {
    id: "2",
    current_booking_status: "Pending",
    product: "Shirt",
    subcategory: "T-Shirt",
  },
  {
    id: "3",
    current_booking_status: "Cancelled",
    product: "Denim Pant",
    subcategory: "Pant",
  },
];

const Bookings = () => {
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredBookings = recentBookings.filter(
    (booking) =>
      filterStatus === "All" || booking.current_booking_status === filterStatus
  );

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between mb-2 ">
        <strong className="text-gray-700 font-medium">Recent Bookings</strong>
        <select
          className="border-2 border-neutral-300 rounded-md text-lg  pl-2 "
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
              <th className="text-center">Product</th>
              <th className="text-center">Subcategory</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td className="text-center">{booking.product}</td>
                <td className="text-center">{booking.subcategory}</td>
                <td className="text-center">
                  {getOrderStatus(booking.current_booking_status.toUpperCase())}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
