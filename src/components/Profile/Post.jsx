import React from "react";
import styled from "@emotion/styled";

export const Post = (props) => {
  return (
    <Wrap>
      <Img src="https://pngimage.net/wp-content/uploads/2018/06/male-avatar-icon-png-4.png" alt="Avatar"/>
      <span>{props.message}</span>
      
      <div>
        <span>like {props.likesCount}</span> 
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  color: greenyellow;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;
