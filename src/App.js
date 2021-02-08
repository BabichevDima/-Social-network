import React from "react";
import "./App.css";
import { HeaderContainer } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ProfileContainer } from "./components/Profile";
import { DialogsContainer } from "./components/Dialogs";
import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import { UsersContainer } from "./components/Users";

export const App = (props) => {
  return (
    <Wrapper>
      <HeaderContainer />
      <Navbar />
      <Content>
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/users" component={UsersContainer} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;
  grid-template-areas: "h h" "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
`;

const Content = styled.div`
  grid-area: c;
  background-color: cornflowerblue;
`;
