import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "@redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader";
import { withAuthRedirect } from "@hoc";
import { compose } from "redux";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

export const UsersContainer = compose(
  connect(
    (state) => ({
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
    }),
    {
      follow,
      unfollow,
      toggleFollowingProgress,
      getUsers,
    }
  ),
  withAuthRedirect
)(UsersAPI);
