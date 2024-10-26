import React from "react";
import { MessageDiv } from "./styles";
import MessageList from "./MessageComponent";
import ChatComponent from "./ChatComponent";
import ProfileComponent from "./ProfileComponent";

const Message = () => {
  return (
    <MessageDiv>
      <MessageList />
      <ChatComponent />
      <ProfileComponent />
    </MessageDiv>
  );
};

export default Message;
