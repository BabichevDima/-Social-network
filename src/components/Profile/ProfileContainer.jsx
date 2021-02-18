import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "@redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

export class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 14779;
      userId = this.props.myId;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export const ProfileContainer = connect(
  (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    isAuth: state.auth.isAuth,
  }),
  {
    getUserProfile,
  }
)(withRouter(ProfileContainerConnect));
