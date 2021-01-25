import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import styled from "@emotion/styled";
import * as axios from "axios"
import User from "../../assets/images/User.png"

const Users = (props) => {

  const getUsers = () => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      });
  }
  
}

  return (
    
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <Img src={u.photos.small != null ? u.photos.small : User} />
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

export const UsersContainer = connect(
  (state) => ({
    users: state.usersPage.users,
  }),
  (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  })
)(Users);

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;
