import React from "react";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <Wrap>
      <Img src="https://w7.pngwing.com/pngs/90/358/png-transparent-social-media-computer-icons-vk-social-network-social-media-logo-social-media-internet.png" alt="Logo"/>
    </Wrap>
  );
};

const Wrap = styled.div`
  grid-area: h;
  background-color: #6e6e6e;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
