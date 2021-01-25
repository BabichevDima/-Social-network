import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "@emotion/styled";
// import { UsersContainer } from "./components/Users/UsersContainer";
import { UsersContainerClass } from "./components/Users/UsersContainerClass";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Navbar />
        <Content>
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UsersContainerClass} />
        </Content>
      </Wrapper>
    </BrowserRouter>
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
