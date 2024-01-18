import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    id: "",
    category_name: "",
    brand_name: "",
  });
  const [categories, setCategories] = useState([
    {
      id: "1",
      category_name: "Shirts",
      brand_name: "lavi's",
    },
    {
      id: "2",
      category_name: "Pants",
      brand_name: "lavi's",
    },
  ]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = () => {
    setCategories((prevCategories) => [
      ...prevCategories,
      { ...newCategory, id: (prevCategories.length + 1).toString() },
    ]);
    handleModalClose();

    toast.success("Category Added Successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-gray-700 font-medium">Category</strong>
        <button
          onClick={handleModalOpen}
          className="bg-gray-700 text-white px-2 py-2 rounded-md hover:bg-neutral-500"
        >
          Add Category
        </button>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Category Name</th>
              <th className="text-center">Brand Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="text-center">#{category.id}</td>
                <td className="text-center">{category.category_name}</td>
                <td className="text-center">{category.brand_name}</td>
                <td className="flex space-x-2 justify-center">
                  <span className="cursor-pointer  p-2 rounded-md text-2xl">
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
          <div className="bg-white p-4 rounded-md relative w-[50%] h-[50%]">
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
            <h2 className="text-lg font-medium mb-4">Add New Category</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="categoryName">Category Name:</label>
                <input
                  type="text"
                  id="categoryName"
                  name="category_name"
                  value={newCategory.category_name}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="brandName">Brand Name:</label>
                <input
                  type="text"
                  id="brandName"
                  name="brand_name"
                  value={newCategory.brand_name}
                  onChange={handleInputChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="bg-gray-700 text-white px-2 py-2 rounded-md hover:bg-neutral-500"
                >
                  Add Category
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

export default CategoryList;
