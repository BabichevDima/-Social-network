import React from "react";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <Wrap>
      <Img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
    </Wrap>
  );
};

const Wrap = styled.div`
  grid-area: h;
  background-color: green;
`;

const Img = styled.img`
  width: 20px;
`;
