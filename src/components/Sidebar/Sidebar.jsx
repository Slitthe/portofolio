import React, { useContext, useEffect, useRef, useState } from "react";
import NeonButton from "../NeonButton/NeonButton.jsx";
import styled from "styled-components";
import { useLocation } from "react-router";
import { animated, useSpring } from "react-spring";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { UIElementsVisibilityContext } from "../../context/UIElementsVisibilityContext.jsx";

const SidebarWrapper = animated(styled.div`
  text-align: right;
  width: 250px;
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px 2px 9px 0 black;
  background: rgba(128, 128, 128, 0.09);

  @media (max-width: 1100px) {
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
  color: var(--main-color);
  cursor: pointer;

  position: fixed;
  right: 16px;

  transition: background ease-in-out 0.2s;

  @media (min-width: 1100px) {
    display: none;
  }
`;

function Sidebar(props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { showMenuButton } = useContext(UIElementsVisibilityContext);
  const location = useLocation();
  const matchesRef = useRef();

  const matches = useMediaQuery(1100);
  matchesRef.current = matches;

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
      if (e.value.scale === 100) {
        setIsMenuOpened(true);
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
        heightApi({ height: matchesRef.current ? "100%" : "0%" });
        scaleApi({ scale: 0 });
        setIsMenuOpened(false);
      }
    },
    config: { mass: 3, tension: 150, friction: 40, duration: 100 },
  }));

  useEffect(() => {
    if (matchesRef.current) {
      heightApi({ height: "100%" });
      mobileOpacityApi({ opacity: 0 });
      scaleApi({ scale: 0 });
      setIsMenuOpened(false);
    } else {
      heightApi({ height: "0%" });
    }
  }, [matchesRef.current]);

  return (
    <>
      {showMenuButton && (
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
      )}

      <Overlay style={{ scale }} />
      <SidebarWrapper
        style={{
          width,
          height: height,
          opacity: matchesRef.current ? opacity : mobileOpacity,
        }}
      >
        <NeonButton to={"/about"}>About</NeonButton>
        <NeonButton to={"/projects"}>Projects</NeonButton>
        <NeonButton to={"/archive"}>Archive</NeonButton>
        <NeonButton to={"/experience"}>Experience</NeonButton>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
