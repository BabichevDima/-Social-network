import React from "react";
import styled from "@emotion/styled";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <DescriptionBlock>ava + description</DescriptionBlock>
    </div>
  );
};

const DescriptionBlock = styled.div`
  padding: 10px;
`;
