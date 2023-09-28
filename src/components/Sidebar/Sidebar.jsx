import React from "react";
import { Link, NavLink } from "react-router-dom";
import NeonButton from "../NeonButton/NeonButton.jsx";

function Sidebar(props) {
  return (
    <>
      <NavLink to={"/"}>
        {({ isActive }) => (
          <NeonButton color="#008080" isActive={isActive}>
            About
          </NeonButton>
        )}
      </NavLink>

      <NavLink to={"/projects"}>
        {({ isActive }) => (
          <NeonButton color="#008080" isActive={isActive}>
            Projects
          </NeonButton>
        )}
      </NavLink>

      <NavLink to={"/experience"}>
        {({ isActive }) => (
          <NeonButton color="#008080" isActive={isActive}>
            Experience
          </NeonButton>
        )}
      </NavLink>
    </>
  );
}

export default Sidebar;
