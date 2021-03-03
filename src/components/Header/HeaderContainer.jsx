import React, { Component } from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, LoginOut } from "@redux/auth-reducer";

class HeaderAPI extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
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
    getAuthUserData,
    LoginOut,
  }
)(HeaderAPI);
