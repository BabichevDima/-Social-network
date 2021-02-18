import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile, getUser } from "@redux/profile-reducer";
import { withRouter } from "react-router-dom";

export class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUser(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export const ProfileContainer = connect(
  (state) => ({ profile: state.profilePage.profile }),
  {
    setUsersProfile,
    getUser,
  }
)(withRouter(ProfileContainerConnect));
