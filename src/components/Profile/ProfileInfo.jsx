import React, { useState } from "react";
import styled from "@emotion/styled";
import { Preloader } from "@common/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import UserImg from "@assets/User2.png";
import { ProfileDataFormReduxForm } from "./ProfileDataForm";

export const ProfileInfo = React.memo(
  ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
    ...props
  }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
      return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };

    const onSubmit = (formData) => {
      // console.log(formData);
      saveProfile(formData).then(() => {
        setEditMode(false);
      });
    };

    return (
      <div>
        <Img src={profile.photos.large || UserImg} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {!editMode ? (
          <ProfileData
            profile={profile}
            setEditMode={setEditMode}
            isOwner={isOwner}
          />
        ) : (
          <ProfileDataFormReduxForm
            initialValues={profile}
            profile={profile}
            setEditMode={setEditMode}
            onSubmit={onSubmit}
          />
        )}

        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    );
  }
);

const ProfileData = ({ profile, setEditMode, isOwner }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            edit
          </button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My profession skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
