import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NeonButton from "../NeonButton/NeonButton.jsx";
import styled from "styled-components";
import { useLocation } from "react-router";
import { animated, useSpring } from "react-spring";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const SidebarWrapper = animated(styled.div`
  text-align: right;
  width: 250px;
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px 2px 9px 0px black;

  @media (max-width: 1100px) {
    //flex-direction: row;
    width: 100% !important;
    z-index: 1000;
    position: fixed;
    gap: 32px;
    height: 0;
    overflow: hidden;
    background: #000;
  }
`);

const Overlay = styled(animated.div)`
  position: fixed;
  top: -50px;
  right: -50px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 999;
  background: #000;
`;

const AvatarIcon = styled(animated.div)`
  width: ${56}px;
  height: ${56}px;
  border-radius: 50%;
  margin-left: 4px;
  z-index: 9999;
  margin-right: 4px;

  display: flex;
  align-items: center;
  align-content: center;
  font-size: 32px;

  justify-content: center;
  color: #008080;
  cursor: pointer;

  position: fixed;
  right: 16px;

  transition: background ease-in-out 0.2s;

  @media (min-width: 1100px) {
    display: none;
  }

  //&:hover {
  //  color: #008080;
  //  background: #000;
  //  border: 2px solid #008080;
  //}
`;

function Sidebar(props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const location = useLocation();

  const matches = useMediaQuery(1100);

  const [{ width, opacity }, api] = useSpring(() => ({
    width: 0,
    opacity: 0,
    config: { mass: 3, tension: 150, friction: 40 },
  }));

  useEffect(() => {
    mobileOpacityApi({ opacity: 0 });
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

  const [{ scale }, scaleApi] = useSpring(() => ({
    scale: 0,
    config: { mass: 3, tension: 150, friction: 40, duration: 300 },
    onRest: (e) => {
      // console.log(e);

      if (e.value.scale === 100) {
        setIsMenuOpened(true);
        // console.log("done");

        mobileOpacityApi({ opacity: 1 });
      } else {
      }
    },
  }));

  const [{ height }, heightApi] = useSpring(() => ({
    height: "0%",
    config: { mass: 3, tension: 150, friction: 40, delay: 600, duration: 300 },
  }));

  const [{ opacity: mobileOpacity }, mobileOpacityApi] = useSpring(() => ({
    opacity: 0,
    onRest: (e) => {
      if (e.value.opacity === 0) {
        heightApi({ height: matches ? "100%" : "0%" });
        scaleApi({ scale: 0 });
        setIsMenuOpened(false);
        // console.log("closed");
      }
    },
    config: { mass: 3, tension: 150, friction: 40, duration: 100 },
  }));

  useEffect(() => {
    if (matches) {
      mobileOpacityApi({ opacity: 0 });
    }
  }, [matches]);

  // console.log(isMenuOpened);
  return (
    <>
      <AvatarIcon
        onClick={() => {
          if (isMenuOpened) {
            mobileOpacityApi({ opacity: 0 });
            heightApi({ height: "0%" });
          } else {
            heightApi({ height: "100%" });
            scaleApi({ scale: 100 });
          }
        }}
      >
        {isMenuOpened ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </AvatarIcon>
      {/*<div style={{ position: "fixed", right: 0, top: 0, zIndex: 9999 }}>*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      */}
      {/*    }}*/}
      {/*  >*/}
      {/*    asdas*/}
      {/*  </button>*/}

      {/*  <button*/}
      {/*    style={{ zIndex: 1111 }}*/}
      {/*    onClick={() => {*/}
      {/*      */}
      {/*    }}*/}
      {/*  >*/}
      {/*    asdas2*/}
      {/*  </button>*/}
      {/*</div>*/}

      <Overlay style={{ scale }} />
      <SidebarWrapper
        style={{
          width,
          height: matches ? "100%" : height,
          opacity: matches ? opacity : mobileOpacity,
        }}
      >
        <NeonButton color="#008080" to={"/about"}>
          About
        </NeonButton>

        <NeonButton color="#008080" to={"/projects"}>
          Projects
        </NeonButton>

        <NeonButton color="#008080" to={"/archive"}>
          Archive
        </NeonButton>

        <NeonButton color="#008080" to={"/experience"}>
          Experience
        </NeonButton>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
