import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right ">
        <p className=" mb-1 font-Dosis font-semibold text-lg">{message.name}</p>
        <p className="user-message text-lg font-Dosis font-medium">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
