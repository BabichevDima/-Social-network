import React from "react";
import styled from "@emotion/styled";
import { Preloader } from "../Users/Preloader";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <span>description: </span>
        <DescriptionBlock>{props.profile.aboutMe}</DescriptionBlock>
      </div>
      <img
        src={
          props.profile.photos.large != null
            ? props.profile.photos.large
            : "https://pngimage.net/wp-content/uploads/2018/06/male-avatar-icon-png-4.png"
        }
      />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

const DescriptionBlock = styled.div`
  padding: 10px;
`;
