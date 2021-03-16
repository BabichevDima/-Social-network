import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Network from "@assets/Network.png";

export const Header = ({ isAuth, login, loginOut }) => {
  return (
    <Wrap>
      <Img src={Network} alt="Logo" />
      <Login>
        {isAuth ? (
          <div>
            <div>{login}</div>
            <div>
              <button onClick={loginOut}>Log out</button>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </Login>
    </Wrap>
  );
};

const Wrap = styled.div`
  grid-area: h;
  background-color: #6e6e6e;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Login = styled.div`
  float: right;
`;
