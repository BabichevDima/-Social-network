import React from "react";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ id, name }) => {
  let path = "/dialogs/" + id;

  return (
    <div>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
