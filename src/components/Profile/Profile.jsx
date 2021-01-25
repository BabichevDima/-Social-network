import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  //look props
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
