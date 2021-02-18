import React, { Component } from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, authMe } from "../../redux/auth-reducer";

class HeaderAPI extends Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

export const HeaderContainer = connect(
  (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }),
  {
    setAuthUserData,
    authMe,
  }
)(HeaderAPI);
