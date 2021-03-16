import React from "react";
import preloader from "@assets/Loading.gif";

export const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} />
    </div>
  );
};
