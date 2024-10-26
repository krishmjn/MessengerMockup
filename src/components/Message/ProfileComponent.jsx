import { Popover } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProfilePopover } from "./styles";
import { PROFILE_STATE } from "./store/action";

const ProfileComponent = () => {
  const { selectedUserId, users, profileState } = useSelector(
    (state) => state.usersReducer
  );
  const dispatch = useDispatch();
  const user = users?.find((user) => user?.id === selectedUserId);
  const content = (
    <StyledProfilePopover>
      <div className="top-header">
        <img
          src={user?.avatar}
          alt={user?.name}
          style={{ width: "45px", height: "45px", borderRadius: "50%" }}
        />
        <i
          class="fa-solid fa-circle-xmark"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({
              type: PROFILE_STATE,
            });
          }}
        >
          {" "}
        </i>
        <p>{user?.name}</p>
        <div style={{ display: "flex" }}>
          <i
            class="fa-solid fa-lock"
            style={{ position: "relative", display: "inline-block" }}
          ></i>
          <p>End to end encryption</p>
        </div>
      </div>
    </StyledProfilePopover>
  );

  return (
    <div>
      <Popover
        trigger="click"
        content={content}
        open={profileState}
        // align={top}
      />
    </div>
  );
};

export default ProfileComponent;
