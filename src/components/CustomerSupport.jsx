import React, { useState } from "react";
import moment from "moment";
import {
  FaSearch,
  FaUser,
  FaVideo,
  FaPhone,
  FaSmile,
  FaPaperPlane,
} from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import Avatar from "../images/avatar.svg";

const ChatList = () => {
  const staticMessages = [
    { text: "Hello!", sender: "other" },
    { text: "Hi there! How can I help you?", sender: "Other" },
    { text: "I'm interested in your product.", sender: "other" },
  ];

  const [selectedUser, setSelectedUser] = useState({
    avatar: { Avatar },
    name: "John Doe",
  });

  let prevSender = null;

  return (
    <div className="flex h-screen">
      <div
        className="flex-2 p-2 overflow-y-hidden rounded-sm"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex items-center mb-4 border-gray-500 p-2 justify-between">
          <div className="flex gap-1 items-center border-2 rounded-2xl border-gray-300 p-2">
            <input
              type="text"
              className="w-full bg-gray-100 text-gray-500"
              placeholder="Search"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <IoFilterOutline className="ml-2 text-gray-500 cursor-pointer text-2xl" />
        </div>
        <div className="flex-1 mt-2">
          {staticMessages.map((message, index) => {
            const isCurrentUser = message.sender === "user";
            const showLine =
              prevSender !== null && prevSender !== isCurrentUser;

            prevSender = isCurrentUser;

            return (
              <div
                key={index}
                className={`flex items-center p-2 rounded mb-2 max-w-md cursor-pointer hover:bg-gray-100 ${
                  isCurrentUser ? "self" : "other"
                }`}
                onClick={() =>
                  setSelectedUser({
                    avatar: { Avatar },
                    name: "John Doe",
                  })
                }
              >
                <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
                  <FaUser className="text-white w-full h-full" />
                </div>
                <div className="ml-3">
                  {showLine && <div className="border-b mb-1"></div>}
                  <div className="flex items-center justify-between">
                    <div className="font-bold">
                      {isCurrentUser ? "You" : "John Doe"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {moment().format("hh:mm A")}
                    </div>
                  </div>
                  <div className="text-gray-600">{message.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 p-3 flex flex-col relative border rounded">
        <div className="flex p-2 items-center mb-4 bg-gray-300 rounded">
          <div className="me-2">
            <img
              src={Avatar}
              alt="User Avatar"
              className="h-10 w-9 rounded-full"
            />
          </div>
          <div className="flex justify-between flex-1">
            <div className="font-bold text-lg">{selectedUser.name}</div>
            <div className="flex items-center gap-4">
              <FaVideo className="cursor-pointer" />
              <FaPhone className="cursor-pointer ml-3 mr-3" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-hidden"></div>

        <div className="flex items-end">
          <div className="relative mr-2">
            <FaSmile className="text-2xl cursor-pointer" />
          </div>

          <input
            type="text"
            className="flex-1 border rounded p-2"
            placeholder="Type a message..."
          />

          <div className="flex items-center ml-2">
            <FaPaperPlane className="text-blue-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
