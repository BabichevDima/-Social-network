import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile, getUser } from "@redux/profile-reducer";
import { withRouter } from "react-router-dom";

export class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 2;
      userId = this.props.myId;
    }
    this.props.getUser(userId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
        <div>{this.props.myId}</div>
      </>
    );
  }
}

export const ProfileContainer = connect(
  (state) => ({ profile: state.profilePage.profile, myId: state.auth.id }),
  {
    setUsersProfile,
    getUser,
  }
)(withRouter(ProfileContainerConnect));
