import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/radiant">Radiant</NavLink>
      <NavLink to="/dire">Dire</NavLink>
      <NavLink to="/create">Add Hero</NavLink>
    </div>
  );
};

export default NavBar;
