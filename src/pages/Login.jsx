import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Admin from "../images/Admin.jpeg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <form className="bg-white rounded-md shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8">Login</h2>

          <div className="mb-4 relative">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
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
      </div>

      <div className="flex w-1/2">
        <img src={Admin} alt="Login" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Login;
