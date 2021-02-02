import React from "react";
import styled from "@emotion/styled";
import { Preloader } from "../Users/Preloader";

export const ProfileInfo = (props) => {
if (!props.profile){
  return <Preloader />
}
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <DescriptionBlock>{props.profile.aboutMe}</DescriptionBlock>
      <img src={props.profile.photos.large}/>
    </div>
  );
};

const DescriptionBlock = styled.div`
  padding: 10px;
`;
