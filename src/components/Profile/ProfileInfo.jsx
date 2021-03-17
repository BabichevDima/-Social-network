import React from "react";
import styled from "@emotion/styled";
import { Preloader } from "@common/Preloader";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = React.memo(({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <span>description: </span>
        <DescriptionBlock>{profile.aboutMe}</DescriptionBlock>
      </div>
      <img
        src={
          profile.photos.large != null
            ? profile.photos.large
            : "https://pngimage.net/wp-content/uploads/2018/06/male-avatar-icon-png-4.png"
        }
      />
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
});

const DescriptionBlock = styled.div`
  padding: 10px;
`;
