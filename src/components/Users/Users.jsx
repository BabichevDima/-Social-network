import React from "react";
import { User } from "./User";
import { PaginationBasic } from "@common/Pagination";

export const Users = ({
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
        currentPage={currentPage}
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
