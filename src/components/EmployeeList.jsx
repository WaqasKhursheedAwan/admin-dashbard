import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    salary: "",
    skills: "",
  });
  const [employees, setEmployees] = useState([
    {
      name: "Waqas",
      email: "abc@example.com",
      phone: "111-111-111",
      address: "hyderabad",
      jobTitle: "Software Engineer",
      salary: "80,000",
      skills: "React, Node.js, JavaScript",
    },
    {
      name: "Affan",
      email: "affan@example.com",
      phone: "222-222-222",
      address: "latifabad",
      jobTitle: "UX Designer",
      salary: "70,000",
      skills: "UI/UX Design",
    },
  ]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddEmployee = () => {
    if (
      !newEmployee.name ||
      !newEmployee.email ||
      !newEmployee.phone ||
      !newEmployee.address ||
      !newEmployee.jobTitle ||
      !newEmployee.salary ||
      !newEmployee.skills
    ) {
      toast.error("All fields are required.");
      return;
    }

    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: (prevEmployees.length + 1).toString() },
    ]);
    handleModalClose();

    toast.success("Employee Added Successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-gray-700 font-medium">Employee List</strong>
        <button
          onClick={handleModalOpen}
          className="bg-gray-700 text-white px-2 py-2 rounded-md hover:bg-neutral-500"
        >
          Add Employee
        </button>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Address</th>
              <th className="text-center">Job Title</th>
              <th className="text-center">Salary</th>
              <th className="text-center">Skills</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="text-center">{employee.name}</td>
                <td className="text-center">{employee.email}</td>
                <td className="text-center">{employee.phone}</td>
                <td className="text-center">{employee.address}</td>
                <td className="text-center">{employee.jobTitle}</td>
                <td className="text-center">{employee.salary}</td>
                <td className="text-center">{employee.skills}</td>
                <td className="flex space-x-2 justify-center">
                  <span className="cursor-pointer p-2 rounded-md text-2xl">
                    <FiEdit />
                  </span>
                  <span className="cursor-pointer p-2 rounded-md text-2xl">
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[50%] h-[95%]">
            <button
              onClick={handleModalClose}
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
            <h2 className="text-lg font-medium mb-2">Add New Employee</h2>
            <form>
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={newEmployee.phone}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={newEmployee.address}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="jobTitle">Job Title:</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={newEmployee.jobTitle}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={newEmployee.salary}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="skills">Skills:</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={newEmployee.skills}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleAddEmployee}
                  className="bg-gray-700 text-white px-2 py-2 rounded-md hover:bg-neutral-500"
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EmployeeList;
