import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "@redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14779;
      // userId = this.props.myId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

export const ProfileContainer = compose(
  connect(
    (state) => ({
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      myId: state.auth.id,
    }),
    {
      getUserProfile,
      getStatus,
      updateStatus,
    }
  ),
  withRouter
)(ProfileContainerConnect);
