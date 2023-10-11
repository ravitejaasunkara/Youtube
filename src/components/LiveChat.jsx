import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [userMessage,setUserMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(10),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  });

  const messageHandler = () => {
    dispatch(addMessage({
      name:"Raviteja",
      message:userMessage
    }));
    setUserMessage("");
  }
  return (
    <>
    <div className="p-2 m-2 border border-black ml-2 w-full h-[500px] bg-slate-100 rounded-lg overflow-auto flex flex-col-reverse">
      <div>
        {chatMessages.map((item, index) => (
          <ChatMessage name={item?.name} message={item?.message} key={index} />
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center">
      <input type="text" placeholder="Enter your message" className="p-2 mx-2 w-3/4 border border-black"
      value={userMessage}
      onChange={(e) => setUserMessage(e.target.value)}
      />
      <img src="https://img.icons8.com/fluency/48/sent.png" alt="sent" className="w-10 h-8 cursor-pointer"
      onClick={messageHandler}/>
    </div>
    </>
  );
};

export default LiveChat;
