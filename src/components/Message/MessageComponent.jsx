import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_USERS_SUCCESS,
  FETCH_MORE_USERS_SUCCESS,
  SELECt_USER,
} from "./store/action";
import { StyledProfile, StyledProfiles, StyledStatusIcon } from "./styles";
import { getRandomAvatarUrl } from "./helper";

const MessageList = () => {
  const dispatch = useDispatch();
  const { users, page } = useSelector((state) => state.usersReducer);

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

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      fetchUsers(page);
    }
  };

  const handleUserClick = (id) => {
    dispatch({
      type: SELECt_USER,
      payload: { data: id },
    });
  };

  return (
    <StyledProfiles>
      {users
        .slice(0, 9) // Only take the first 9 users
        .reverse()
        .map((user) => (
          <StyledProfile key={user.id} onClick={() => handleUserClick(user.id)}>
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "relative",
              }}
            />
            {user?.status === "active" && <StyledStatusIcon />}
            <p>{user.name}</p>
          </StyledProfile>
        ))}
    </StyledProfiles>
  );
};

export default MessageList;
