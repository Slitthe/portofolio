import React from "react";
import { Link, NavLink } from "react-router-dom";
import NeonButton from "../NeonButton/NeonButton.jsx";

function Sidebar(props) {
  return (
    <>
      <NeonButton color="#008080" to={"/"}>
        About
      </NeonButton>

      <NeonButton color="#008080" to={"/projects"}>
        Projects
      </NeonButton>

      <NeonButton color="#008080" to={"/experience"}>
        Experience
      </NeonButton>
    </>
  );
}

export default Sidebar;
