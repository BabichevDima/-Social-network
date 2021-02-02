import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { setUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

export class ProfileContainerConnect extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainerConnect);

export const ProfileContainer = connect((state) => ({ profile: state.profilePage.profile }), {
  setUsersProfile
})(WithUrlDataContainerComponent);
