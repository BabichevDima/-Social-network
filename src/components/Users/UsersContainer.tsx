import React from "react";
import { connect } from "react-redux";
// import {
//   follow,
//   unfollow,
//   toggleFollowingProgress,
//   requestUsers,
// } from "@redux/users-reducer";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import { Users } from "./Users";
// import { Preloader } from "@common/Preloader";
import { Preloader } from "../common/Preloader";
import { compose } from "redux";
// import {
//   getUsers,
//   getPageSize,
//   getTotalUsersCount,
//   getCurrentPage,
//   getIsFetching,
//   getFollowingInProgress,
// } from "@redux/users-selectors";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";
import { UsersType } from "../../Type/Type";
import { AppStateType } from "../../redux/redux-store";

type PropsType = {
  pageTitle: string;
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  requestUsers: (currentPage: number, pageSize: number) => void;
};

class UsersAPI extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
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

const UsersContainer = compose(
  connect(
    (state: AppStateType) => ({
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

export default UsersContainer;
