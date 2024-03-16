import React, { useState, useEffect, useRef } from "react";
import { IoChatbubble } from "react-icons/io5";
import { motion } from "framer-motion";

const ChatBox = () => {
  const [visible, setVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [uid, setUid] = useState(() => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = "user_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  });

  const messagesEndRef = useRef(null);

  const handleButtonClick = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;
    setMessages((prevMessages) => [...prevMessages, { text: inputValue, sender: "user" }])
    setInputValue("");
    try {
      const response = await fetch(
        `https://gu-confessions-xero.koyeb.app/api/chat?uid=${uid}&msg=${inputValue}`
      );
      const data = await response.json();

      // Update messages state with the bot's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.cnt, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      {visible && (
        <motion.button
          className="fixed bottom-4 right-4 overflow-auto cursor-pointer w-20 h-20 z-10 transition-all duration-300 ease-in-out"
          onClick={handleButtonClick}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <IoChatbubble
            style={{ width: "70%", height: "70%", color: "#fff" }}
          />
        </motion.button>
      )}
      {showChat && (
        <motion.div
          className="fixed message-box bottom-[calc(4rem+1.5rem)] right-0 mr-4  p-6 rounded-lg bg-slate-100  w-[300px] h-[500px] lg:h-[640px] md:w-[400px] md:h-[700px] z-10 shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold text-lg tracking-tight text-black">
                Chat
              </h2>
              <p className="text-sm text-gray-500">Powered by Technojam</p>
            </div>
            <div className="overflow-y-auto flex-1 max-h-[325px] lg:max-h-[450px]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <img src="/TechnoJam.png" className="w-5 h-5 mr-2 mt-2" />
                  )}
                  <div className="flex items-center">
                    <p
                      className={`rounded-xl max-w-fit px-4 py-2 text-sm   ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white self-end"
                          : "bg-gray-200 text-gray-800 self-start"
                      }`}
                    >
                      {message.text}
                    </p>
                    {message.sender === "user" && (
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        className="fill-current text-black ml-2 flex-none"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="flex-1  h-10 px-4 rounded-xl border border-gray-400 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default ChatBox;
