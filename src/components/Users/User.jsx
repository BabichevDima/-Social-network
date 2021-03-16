import React, { useState } from "react";
import styled from "@emotion/styled";
import UserImg from "@assets/User.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const User = ({ user, followingInProgress, follow, unfollow }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

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
            onClick={!isLoading ? () => handleClick() : null}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            {isLoading ? "Loading…" : "Unfollow"}
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

// function NetworkRequest() {
//   return new Promise((resolve) => {
//     props.unfollow(u.id);
//     return resolve;
//   });
// }

// useEffect(() => {
//   if (isLoading) {
//     NetworkRequest().then(() => {
//       setLoading(false);
//     });
//   }
// }, [isLoading]);
