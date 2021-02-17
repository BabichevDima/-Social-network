import React from "react";
import styled from "@emotion/styled";
import User from "../../assets/images/User.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "@api";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <SelectedPage
              key={p.id}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </SelectedPage>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <Img
                src={u.photos.small != null ? u.photos.small : User}
                alt="Avatar"
              />
            </NavLink>
          </div>

          <div>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  usersAPI.deleteUsers(u.id).then((data) => {
                    if (data.resultCode == 0) {
                      props.unfollow(u.id);
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  usersAPI.postUsers(u.id).then((data) => {
                    if (data.resultCode == 0) {
                      props.follow(u.id);
                    }
                    props.toggleFollowingProgress(false, u.id);
                  });
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </div>
      ))}
    </div>
  );
};

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SelectedPage = styled.span`
  padding-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
