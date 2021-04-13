import React from "react";
import { User } from "./User";
// import { PaginationBasic } from "@common/Pagination";
import { PaginationBasic } from "../common/Pagination";
import { UsersType } from "../../Type/Type";

type PropsType = {
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalUsersCount: number;
  pageSize: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

export const Users: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  follow,
  unfollow,
  ...props
}) => {
  return (
    <div>
      <PaginationBasic
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => {
          return (
            <User
              user={u}
              key={u.id}
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
            />
          );
        })}
      </div>
    </div>
  );
};
