import React from "react";
import { MyPostsContainer } from "./MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
