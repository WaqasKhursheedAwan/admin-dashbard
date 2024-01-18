// import React, { useState } from "react";
// import { FiEdit, FiPlus } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SubCategory = ({ mainCategories }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newSubCategory, setNewSubCategory] = useState({
//     id: "",
//     subcategory_name: "",
//     selectedCategory: "",
//   });
//   const [subCategories, setSubCategories] = useState([]);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddSubCategory = () => {
//     if (!newSubCategory.subcategory_name || !newSubCategory.selectedCategory) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setSubCategories((prevSubCategories) => [
//       ...prevSubCategories,
//       {
//         ...newSubCategory,
//         id: (prevSubCategories.length + 1).toString(),
//       },
//     ]);
//     handleModalClose();
//     toast.success("Subcategory Added Successfully!");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSubCategory((prevSubCategory) => ({
//       ...prevSubCategory,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//       <div className="flex justify-between items-center mb-3">
//         <strong className="text-gray-700 font-medium">Subcategory</strong>
//         <button
//           onClick={handleModalOpen}
//           className="bg-gray-700 text-white px-2 p-2 rounded-md hover:bg-neutral-500"
//         >
//           Add Subcategory
//         </button>
//       </div>
//       <div className="border-x border-gray-200 rounded-sm mt-3">
//         <table className="w-full text-gray-700">
//           <thead>
//             <tr>
//               <th className="text-center">ID</th>
//               <th className="text-center">Subcategory Name</th>
//               <th className="text-center">Category</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subCategories.map((subcategory) => (
//               <tr key={subcategory.id}>
//                 <td className="text-center">#{subcategory.id}</td>
//                 <td className="text-center">{subcategory.subcategory_name}</td>
//                 <td className="text-center">{subcategory.selectedCategory}</td>
//                 <td className="flex space-x-2 justify-center">
//                   <span className="cursor-pointer p-2 rounded-md text-2xl">
//                     <FiEdit />
//                   </span>
//                   <span className="cursor-pointer p-2 rounded-md text-2xl">
//                     <MdDelete />
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-md relative w-[50%] h-[50%]">
//             <button
//               onClick={handleModalClose}
//               className="absolute top-2 right-2 text-gray-600 cursor-pointer"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <h2 className="text-lg font-medium mb-4">Add New Subcategory</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="subcategoryName">Subcategory Name:</label>
//                 <input
//                   type="text"
//                   id="subcategoryName"
//                   name="subcategory_name"
//                   value={newSubCategory.subcategory_name}
//                   onChange={handleInputChange}
//                   className="border rounded-md p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="category">Category:</label>
//                 <select
//                   id="category"
//                   name="selectedCategory"
//                   value={newSubCategory.selectedCategory}
//                   onChange={handleInputChange}
//                   className="border rounded-md p-2 w-full"
//                 >
//                   <option value="">Select a category</option>
//                   {mainCategories.map((category) => (
//                     <option key={category.id} value={category.category_name}>
//                       {category.category_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <button
//                   type="button"
//                   onClick={handleAddSubCategory}
//                   className="bg-gray-700 text-white px-2 py-2 rounded-md hover:bg-neutral-500"
//                 >
//                   Add Subcategory
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default SubCategory;
import React from "react";
import SubCategoryData from "../components/SubCategory";

const SubCategory = () => {
  return (
    <div>
      <SubCategoryData />
    </div>
  );
};

export default SubCategory;
