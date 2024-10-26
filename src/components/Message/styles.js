import styled from "styled-components";

export const StyledProfiles = styled.div`
  overflow-y: scroll;
  width: 22%;
  height: 600px;
  ${"" /* border-radius: 20px; */}
`;

// export const StyledProfile = styled.div`
//   text-align: left;
//   align-items: center;
//   display: flex;
//   background-color: black;
//   color: white;
//   padding: 10px;
//   cursor: pointer;
//   position: relative;
//   &:hover {
//     background-color: gray; /* Change to your desired hover color */
//   }
//   p {
//     margin-left: 12px;
//   }
// `;
export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1877f2;
  color: white;
  font-size: 16px;

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }

  .search-bar {
    max-width: 300px;
    border-radius: 20px;
  }

  .nav-icons {
    display: flex;
    align-items: center;
    gap: 30px;

    .icon {
      font-size: 18px;
      color: white;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #d9e3f0;
      }
    }
  }
`;

export const MessageDiv = styled.div`
  display: flex;
  margin: 30px auto;
  background-color: white;
  color: black;
  height: 100%;
  width: 85%;
  margin-x: auto;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
`;

export const ChatDiv = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ChatHeader = styled.div`
  align-items: center;
  height: 60px;
  width: 100%;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.1);

  justify-content: space-between;
  position: relative;
  .left {
    display: flex;
    align-items: center;
  }
  .icons {
    margin: 10px 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    i {
      width: 30px;
      height: 30px;
      cursor: pointer;
      align-items: center;
      text-align: center;
      border-radius: 10%;
      font-size: 22px;
      color: #1877f2;
      &:hover {
        color: gray;
      }
    }
  }
  .icons > :first-child {
    margin-right: 20px;
  }

  img {
    margin: 8px;
  }
`;
export const ChatSection = styled.div``;

export const ChatFooter = styled.div`
  margin: 10px 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  input {
    width: 84%;
    margin-right: 10px;
    border-radius: 20px;
    border: 1px solid black;
    padding: 6px;
    position: relative;
  }
  .send {
    display: flex;
    cursor: pointer;
    font-size: 22px;
    position: absolute;
    right: 20px;
    top: 3.5px;
    color: #1877f2;
    gap: 8px;
  }
  .attachments {
    display: flex;
    gap: 10px;
    color: #1877f2;
    position: absolute;
    left: 0px;
    top: 3.5px;

    font-size: 22px;
  }
`;

export const StyledStatusIcon = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #22c55e;
  position: absolute;
  bottom: 10px;
  left: 35px;
`;
export const StyledProfilePopover = styled.div`
  padding: 15px;
  width: 200px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;

  .top-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    i {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 20px;
      color: #999;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #333;
      }
    }

    p {
      margin: 4px 0;
      font-size: 14px;
      color: black;
    }
  }
`;
export const StyledProfile = styled.div`
  text-align: left;
  align-items: center;
  display: flex;
  background-color: #black;
  color: black;
  padding: 12px;
  cursor: pointer;
  position: relative;
  ${"" /* border-radius: 8px; */}

  &:hover {
    background-color: #888;
  }

  p {
    margin-left: 12px;
    font-size: 14px;
  }
`;
export const StyledImageProfile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`;
