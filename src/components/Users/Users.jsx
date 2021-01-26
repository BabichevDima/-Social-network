import React from "react";
import styled from "@emotion/styled";
import User from "../../assets/images/User.png";

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
            <Img src={u.photos.small != null ? u.photos.small : User} alt="Avatar"/>
          </div>

          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
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
