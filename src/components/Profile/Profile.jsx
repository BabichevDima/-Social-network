import React from "react";
import { MyPostsContainer } from "./MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = (props) => {
  //look props
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
