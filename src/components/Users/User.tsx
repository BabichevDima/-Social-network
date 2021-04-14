import React, { useState } from "react";
import styled from "@emotion/styled";
import UserImg from "@assets/User.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { UsersType } from "../../Type/Type";

type PropsType = {
  user: UsersType;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

export const User: React.FC<PropsType> = ({
  user,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <Img
            src={user.photos.small != null ? user.photos.small : UserImg}
            alt="Avatar"
          />
        </NavLink>
      </div>

      <div>
        {user.followed ? (
          <Button
            variant="primary"
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            variant="light"
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </Button>
        )}
      </div>
      <div>{user.name}</div>
      <div>{user.status}</div>
      <div>{"user.location.country"}</div>
      <div>{"user.location.city"}</div>
    </div>
  );
};

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
