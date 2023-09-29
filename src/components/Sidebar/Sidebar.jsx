import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NeonButton from "../NeonButton/NeonButton.jsx";
import styled from "styled-components";
import { useLocation } from "react-router";
import { animated, useSpring } from "react-spring";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";

const SidebarWrapper = animated(styled.div`
  text-align: right;
  width: 250px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background: #000;

  @media (max-width: 1100px) {
    flex-direction: row;
    height: auto;
    width: 100% !important;
  }
`);

function Sidebar(props) {
  const location = useLocation();

  const [{ width, height, opacity }, api] = useSpring(() => ({
    width: 0,
    opacity: 0,
    config: { mass: 3, tension: 150, friction: 40 },
  }));

  useEffect(() => {
    if (location.pathname !== "/") {
      api({
        width: 250,
        opacity: 1,
      });
    } else {
      api({
        opacity: 0,
        width: 0,
      });
    }
  }, [location.pathname]);

  return (
    <SidebarWrapper style={{ width, height, opacity }}>
      <NeonButton color="#008080" to={"/about"}>
        About
      </NeonButton>

      <NeonButton color="#008080" to={"/projects"}>
        Projects
      </NeonButton>

      <NeonButton color="#008080" to={"/experience"}>
        Experience
      </NeonButton>
    </SidebarWrapper>
  );
}

export default Sidebar;
