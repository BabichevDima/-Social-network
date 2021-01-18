import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "@emotion/styled";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Navbar />
        <Content>
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
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
