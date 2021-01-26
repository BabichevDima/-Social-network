import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>

      <div className={s.item}>
        <span>News</span>
      </div>
      <div className={s.item}>
        <span>Music</span>
      </div>
      <div className={s.item}>
        <span>Settings</span>
      </div>
    </nav>
  );
};
