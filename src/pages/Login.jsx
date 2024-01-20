import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Admin from "../images/Admin.jpeg";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    onLogin();

    navigate("/");
    toast.success("Login successful!");
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <form
          className="bg-white rounded-md shadow-md p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-8">Login</h2>

          <div className="mb-4 relative">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 pl-10 rounded-full"
            />
            <FaUser className="absolute left-3 top-2 text-gray-500" />
          </div>

          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 pl-10 rounded-full"
            />
            {showPassword ? (
              <FaEyeSlash
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={handleTogglePassword}
              />
            ) : (
              <FaEye
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={handleTogglePassword}
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full"
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </div>

      <div className="flex w-1/2">
        <img src={Admin} alt="Login" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Login;
