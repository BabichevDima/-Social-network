import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "@redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "@common/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "@redux/users-selectors";

class UsersAPI extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
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
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

export const UsersContainer = compose(
  connect(
    (state) => ({
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    }),
    {
      follow,
      unfollow,
      toggleFollowingProgress,
      requestUsers,
    }
  )
)(UsersAPI);
