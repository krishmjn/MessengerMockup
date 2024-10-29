import React, { useEffect } from "react";
import {
  ChatDiv,
  ChatFooter,
  ChatHeader,
  ChatSection,
  StyledStatusIcon,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_MORE_USERS_SUCCESS,
  FETCH_USERS_SUCCESS,
  PROFILE_STATE,
  SELECt_USER,
} from "./store/action";
import { getRandomAvatarUrl } from "./helper";

const ChatComponent = () => {
  const { selectedUserId, users, page } = useSelector(
    (state) => state.usersReducer
  );
  const dispatch = useDispatch();

  console.log(selectedUserId, users, "state");
  const user = users?.find((user) => user?.id === selectedUserId);

  const selectedUser = user ? user : users[0];
  console.log(user);
  const fetchUsers = async (pageNum) => {
    const response = await fetch(
      `https://gorest.co.in/public/v1/users?page=${pageNum}`
    );
    const data = await response.json();

    const usersWithAvatars = data.data.map((user) => ({
      ...user,
      avatar: getRandomAvatarUrl(user.gender),
    }));

    if (pageNum === 1) {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: { data: usersWithAvatars },
      });
    } else {
      dispatch({
        type: FETCH_MORE_USERS_SUCCESS,
        payload: { data: usersWithAvatars },
      });
    }
  };
  const handleScroll = (e) => {
    console.log("SCroll");
    if (e.target.scrollTop === 0) {
      fetchUsers(page);
    }
  };

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
      <ChatSection onScroll={handleScroll}>
        {users?.reverse().map((user, index) => (
          <div
            key={user.id}
            className={index % 2 === 0 ? "incoming" : "outgoing"}
          >
            {index % 2 === 0 && (
              <img
                src={selectedUser.avatar}
                alt={user.name}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  position: "relative",
                  marginRight: "10px",
                }}
              />
            )}
            <p>{user?.name}</p>
          </div>
        ))}
      </ChatSection>

      <ChatFooter>
        <div className="attachments">
          <i className="fa-solid fa-circle-plus"></i>
          <i className="fa-solid fa-image"></i>
        </div>
        <input></input>
        <div className="send">
          <i className="fa-solid fa-face-smile"></i>
          <i className="fa-solid fa-location-arrow"></i>
        </div>
      </ChatFooter>
    </ChatDiv>
  );
};

export default ChatComponent;
