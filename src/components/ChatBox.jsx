import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChatBox = () => {
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
  const [prompts, setPrompts] = useState([
    "What is a hackathon?",
    "Who can participate?",
    "Tell me a joke",
    "Who organizes Dexterix?",
  ]);

  const [altprompts, setAltprompts] = useState([
    "When is Dexterix?",
    "Where is Dexterix?",
    "Duration of Event",
    "Registration fee",
    "Team size",
    "Prizes",
  ]);

  const messagesEndRef = useRef(null);

  const handleButtonClick = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);
    setInputValue("");
    try {
      const response = await fetch(
        `https://dex-backend-xero.koyeb.app/api/chat?uid=${uid}&msg=${inputValue}`
      );
      const data = await response.json();

      // Update messages state with the bot's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.cnt.replace(/<tips> enJoke <\/tips>/, ""), sender: "bot" },
      ]);

      const LastMessage = (
        <>
          If you have any more doubts, feel free to contact us at{" "}
          <a
            className="text-cyan-600"
            href="mailto:technojam@galgotiasuniversity.edu.in"
          >
            technojam@galgotiasuniversity.edu.in
          </a>
        </>
      );
      if (prompts.length === 0) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: LastMessage, sender: "bot" },
          ]);
        }, 1000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handlePromptClick = (promptIndex) => {
    const selectedPrompt = prompts[promptIndex];
    setInputValue(selectedPrompt);
    sendMessage();
    const updatedPrompts = prompts.filter((_, index) => index !== promptIndex);
    let newPrompts = [...updatedPrompts];

    if (altprompts.length > 0) {
      const randomIndex = Math.floor(Math.random() * altprompts.length);
      const newPrompt = altprompts[randomIndex];

      // Remove the selected prompt from altprompts
      const updatedAltprompts = [
        ...altprompts.slice(0, randomIndex),
        ...altprompts.slice(randomIndex + 1),
      ];

      // Combine the updated prompts array with the new prompt from altprompts
      newPrompts = [...newPrompts, newPrompt].slice(0, 4);
      setAltprompts(updatedAltprompts);
    }

    setPrompts(newPrompts);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-5 right-2 overflow-auto cursor-pointer w-[90px] aspect-square z-50 transition-all duration-300 ease-in-out"
        onClick={handleButtonClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <LazyLoadImage className="w-full" src="bot.png" />
      </motion.button>
      {showChat && (
        <motion.div
          className="fixed message-box bottom-[calc(4rem+1.5rem)] right-0 mr-2 p-6 pl-[15px] rounded-lg bg-slate-100 w-[320px] h-[80vh] lg:h-[85vh] md:w-[400px] md:h-[85vh] z-50 shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col flex-grow overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <h2 className="font-semibold  tracking-tight text-black">Chat</h2>
              <p className="text-sm text-gray-500">Powered by Technojam</p>
            </div>
            <div className="flex-1 font-sans  overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 mr-2  flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <LazyLoadImage
                      src="/TechnoJam.png"
                      className="w-5 h-5 mr-2 mt-2"
                    />
                  )}
                  <div className="flex items-center">
                    <p
                      className={`rounded-xl max-w-fit px-3 py-[6px] text-sm ${
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
            className="mt-4"
          >
            <div className="flex font-sans flex-wrap items-center">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  className="px-2 lg:px-3 py-[5px] lg:py-[6px] mr-1 mt-1 bg-blue-500 text-white rounded-xl text-xs hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={() => handlePromptClick(index)}
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="flex items-center mx-4 w-full font-sans  mt-4">
              <input
                type="text"
                className="flex-1 h-10 px-4 rounded-xl w-[70%] border border-gray-400 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Type your message"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-xl w-[25%] hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
