import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Network from "../../assets/images/Network.png";

export const Header = (props) => {
  return (
    <Wrap>
      <Img src={Network} alt="Logo" />
      <Login>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>
            <div>
              <button onClick={props.LoginOut}>Log out</button>
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
