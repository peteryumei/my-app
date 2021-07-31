import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
        <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
            Home
        </NavLink>
        {" | "}
        <NavLink to="/react-modal" activeStyle={activeStyle}>
            react-modal
        </NavLink>
        {" | "}
        <NavLink to="/react-bootstrap-modal" activeStyle={activeStyle}>
            react-bootstrap-modal
        </NavLink>
        </nav>
  );
};

export default Header;