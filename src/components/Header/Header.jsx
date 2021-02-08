import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <Wrap>
      <Img
        src="https://w7.pngwing.com/pngs/90/358/png-transparent-social-media-computer-icons-vk-social-network-social-media-logo-social-media-internet.png"
        alt="Logo"
      />
      <Login>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </Login>
    </Wrap>
  );
};

const Wrap = styled.div`
  grid-area: h;
  background-color: #6e6e6e;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Login = styled.div`
  float: right;
`;
