import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "@redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "@hoc";

class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 14779;
      userId = this.props.myId;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}


export const ProfileContainer = connect(
  (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id
  }),
  {
    getUserProfile,
  }
)(withRouter(withAuthRedirect(ProfileContainerConnect)));
