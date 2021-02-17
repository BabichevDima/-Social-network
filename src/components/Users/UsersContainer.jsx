import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
} from "@redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "./Preloader";
import { usersAPI } from "@api";

class UsersAPI extends React.Component {
  constructor(props) {
    super(props);
  }

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
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

export const UsersContainer = connect(
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
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
  }
)(UsersAPI);
