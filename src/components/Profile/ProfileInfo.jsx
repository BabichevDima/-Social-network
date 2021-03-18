import React from "react";
import styled from "@emotion/styled";
import { Preloader } from "@common/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import UserImg from "@assets/User2.png";

export const ProfileInfo = React.memo(
  ({ profile, status, updateStatus, isOwner, savePhoto, ...props }) => {
    if (!profile) {
      return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };

    return (
      <div>
        <div>
          <span>description: </span>
          <DescriptionBlock>{profile.aboutMe}</DescriptionBlock>
        </div>
        <Img src={profile.photos.large || UserImg} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    );
  }
);

const DescriptionBlock = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
