import React from "react";
import { Input, Badge } from "antd";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { StyledImageProfile, StyledNavbar } from "../Message/styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">Mock-Messenger</div>

      <Input.Search
        placeholder="Search..."
        className="search-bar"
        style={{ width: 250 }}
      />

      <div className="nav-icons">
        <i class="fa-solid fa-bell icon"></i>
        <i class="fa-solid fa-envelope icon"></i>
        <StyledImageProfile src="https://randomuser.me/api/portraits/women/91.jpg " />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
