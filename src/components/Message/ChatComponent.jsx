import React, { useEffect } from "react";
import {
  ChatDiv,
  ChatFooter,
  ChatHeader,
  ChatSection,
  StyledStatusIcon,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_STATE, SELECt_USER } from "./store/action";

const ChatComponent = () => {
  const { selectedUserId, users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  console.log(selectedUserId, users, "state");
  const user = users?.find((user) => user?.id === selectedUserId);

  const selectedUser = user ? user : users[0];
  console.log(user);
  return (
    <ChatDiv>
      <ChatHeader>
        <div className="left">
          <img
            src={selectedUser?.avatar}
            alt={selectedUser?.name}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              position: "relative",
            }}
          />
          {selectedUser?.status === "active" && <StyledStatusIcon />}
          <p>{selectedUser?.name}</p>
        </div>
        <div className="icons">
          <i class="fa-solid fa-phone"></i>
          <i
            class="fa-solid fa-ellipsis-vertical"
            onClick={() => {
              console.log("Clicked");
              dispatch({
                type: PROFILE_STATE,
              });
              dispatch({
                type: SELECt_USER,
                payload: { data: selectedUser?.id },
              });
            }}
          ></i>
        </div>
      </ChatHeader>
      <ChatSection></ChatSection>
      <ChatFooter>
        <input></input>
        <i class="fa-solid fa-location-arrow"></i>
      </ChatFooter>
    </ChatDiv>
  );
};

export default ChatComponent;
