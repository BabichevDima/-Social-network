import React, { Component, Suspense } from "react";
import "./App.css";
import { HeaderContainer } from "./components/Header";
import { Navbar } from "./components/Navbar";

// import { ProfileContainer } from "./components/Profile";
// import { DialogsContainer } from "./components/Dialogs";
// import { UsersContainer } from "./components/Users";

import { Route, withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { LoginConnect } from "./components/Login";
import { initializeApp } from "@redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { Preloader } from "./components/common/Preloader";
import { withReactSuspense } from "./components/hoc/withReactSuspense";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <Wrapper>
        <HeaderContainer />
        <Navbar />
        <Content>
          <Route path="/dialogs" render={withReactSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={withReactSuspense(ProfileContainer)}
          />
          <Route
            path="/users"
            render={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <UsersContainer />
                </Suspense>
              );
            }}
          />
          <Route path="/login" component={LoginConnect} />
        </Content>
      </Wrapper>
    );
  }
}

export const AppContainer = compose(
  withRouter,
  connect(
    (state) => ({
      initialized: state.app.initialized,
    }),
    {
      initializeApp,
    }
  )
)(App);

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
