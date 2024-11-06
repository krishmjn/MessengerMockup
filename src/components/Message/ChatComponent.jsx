import React, { useEffect, useRef, useCallback, useState } from "react";
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
  const endOfMessagesRef = useRef(null);       // Ref for initial scroll
  const chatSectionRef = useRef(null);         // Ref for chat container
  const [initialLoadComplete, setInitialLoadComplete] = useState(false); // Track initial load
  const isFetching = useRef(false);            // Prevent multiple fetches

  const user = users?.find((user) => user?.id === selectedUserId);
  const selectedUser = user || users[0];

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
      setInitialLoadComplete(true); // Mark initial load as complete
    } else {
      dispatch({
        type: FETCH_MORE_USERS_SUCCESS,
        payload: { data: usersWithAvatars },
      });
    }
  };

  const handleScroll = useCallback(() => {
    if (chatSectionRef.current && chatSectionRef.current.scrollTop === 0 && !isFetching.current) {
      isFetching.current = true;

      const previousScrollHeight = chatSectionRef.current.scrollHeight;

      fetchUsers(page).then(() => {
        isFetching.current = false;
        // Adjust scroll position to maintain user's view
        chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight - previousScrollHeight;
      });
    }
  }, [page]);

  // Scroll to the last message only after the initial data fetch
  useEffect(() => {
    if (initialLoadComplete && endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [initialLoadComplete]);

  // Fetch initial users on component mount
  useEffect(() => {
    fetchUsers(1); // Initial fetch
  }, []);

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
          <i className="fa-solid fa-phone"></i>
          <i
            className="fa-solid fa-ellipsis-vertical"
            onClick={() => {
              dispatch({ type: PROFILE_STATE });
              dispatch({
                type: SELECt_USER,
                payload: { data: selectedUser?.id },
              });
            }}
          ></i>
        </div>
      </ChatHeader>
      <ChatSection ref={chatSectionRef} onScroll={handleScroll}>
        {users
          .slice()
          .reverse()
          .map((user, index) => (
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
        <div ref={endOfMessagesRef} />
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
