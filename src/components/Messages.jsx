import React, { useState } from "react";
import {
  FaSearch,
  FaVideo,
  FaPhone,
  FaSmile,
  FaPaperPlane,
} from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

const Messages = () => {
  const users = [
    { id: 1, name: "John Doe", unreadMessages: 1 },
    { id: 2, name: "Jane Doe", unreadMessages: 0 },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const messages = [
    { id: 1, sender: "John Doe", text: "Hello!", timestamp: "just now" },
    { id: 2, sender: "You", text: "Hi there!", timestamp: "just now" },
    { id: 3, sender: "John Doe", text: "how are you!", timestamp: "just now" },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    user.unreadMessages = 0;
  };

  return (
    <div className="flex p-2 h-90vh overflow-hidden pt-10 ">
      <div
        className="w-1/3  "
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex items-center mb-4 border-gray-500 p-2  justify-between">
          <div className="flex gap-1 items-center border-2 rounded-2xl border-gray-300 p-2">
            <input
              type="text"
              className="w-full bg-gray-100 text-gray-500 outline-none"
              placeholder="Search"
            />
            <FaSearch className="text-gray-500 " />
          </div>
          <IoFilterOutline className=" mr-3 text-gray-500 cursor-pointer text-3xl" />
        </div>

        <div>
          {users.map((user) => (
            <div
              key={user.id}
              className={`p-4 border-b border-gray-300 hover:bg-gray-100 cursor-pointer ${
                selectedUser && selectedUser.id === user.id ? "bg-gray-100" : ""
              }`}
              onClick={() => handleUserClick(user)}
            >
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden"></div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium">{user.name}</p>
                        <span className="text-xs text-gray-500 ml-16">
                          just now
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Hello how are you</p>
                      <span className="flex items-center text-xs bg-green-400 text-white rounded-full px-2 w-4 h-4 justify-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-2 flex flex-col  ">
        {selectedUser ? (
          <>
            <div className="p-2 bg-gray-200 flex items-center justify-between rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden"></div>
                <div className="ml-4">
                  <p className="text-lg font-medium">{selectedUser.name}</p>
                  <p className="text-gray-500 text-xs">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaVideo className="cursor-pointer" />
                <FaPhone className="cursor-pointer ml-3 mr-3" />
              </div>
            </div>

            <div className="flex-1 mt-3 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "You" ? "justify-end" : "justify-start"
                  } mb-2 `}
                >
                  <div className="max-w-xs px-4 py-2 bg-white rounded-lg shadow-md">
                    <div className="font-bold">{message.sender}</div>
                    <p>{message.text}</p>
                    <div className="text-xs text-gray-500 text-end ">
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-3 border border-gray-300 rounded-full p-2 bg-gray-200  ">
              <div className="relative mr-2">
                <FaSmile className="text-2xl cursor-pointer items-center" />
              </div>

              <input
                type="text"
                className="flex-1 border rounded p-2 bg-gray-200 outline-none"
                placeholder="Type a message..."
              />

              <div className="flex items-center ml-2">
                <FaPaperPlane className="text-blue-500 text-2xl cursor-pointer " />
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
