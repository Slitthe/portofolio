import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { UIElementsVisibilityContext } from "../context/UIElementsVisibilityContext.jsx";

const BUTTON_SIZE = 56;

const BUTTONS = [
  {
    icon: <FiGithub />,
    url: "https://github.com/Slitthe",
    text: "GitHub",
  },
  {
    icon: <AiOutlineLinkedin />,
    url: "https://www.linkedin.com/in/silviu-gherman/",
    text: "LinkedIn",
  },
  {
    icon: <AiOutlineFilePdf />,
    url: "https://drive.google.com/file/d/10mj-Q433UV5urOw5WXrPvXYT-_RsQfBR/view?usp=sharing",
    text: "Resume",
  },
];

const BlurredBackground = styled(animated.div)`
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 12px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  touch-action: none;
  padding-bottom: 64px;
`;

const AvatarIcon = styled(animated.a)`
  min-height: ${BUTTON_SIZE}px;
  min-width: ${BUTTON_SIZE}px;
  border-radius: 50%;
  margin-left: 4px;
  margin-right: 4px;

  display: flex;
  align-items: center;
  align-content: center;
  font-size: 32px;
  background: var(--main-color);
  justify-content: center;
  color: black;
  cursor: pointer;

  position: relative;

  transition: background ease-in-out 0.2s;

  &:hover {
    color: var(--main-color);
    background: #000;
    outline: 2px solid var(--main-color);
  }
`;

const FloatingButton = styled(animated.div)`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: 50%;
  border: none;
  position: absolute;
  

  background-clip: content-box;
  touch-action: none;
  bottom: 8px;
  z-index: 1;

  &:focus-visible {
    outline-offset: 2px;
    outline: #569AFF99 auto 6px;
  };

  & > span {
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
  },
`;

const ButtonText = styled.div`
  position: absolute;
  color: #cdcdcd;
  left: -22px;
  transform: translateX(-100%);
  font-size: 16px;
  background: var(--main-color);
  border-radius: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;

const ContactMenu = () => {
  const [, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const buttonRef = React.useRef(null);
  const avatarRefs = React.useRef([]);
  const avatarRefInitialPositions = React.useRef([]);
  const containerRef = React.useRef(null);
  const { showContactMenu } = useContext(UIElementsVisibilityContext);

  const isVisible = React.useRef(false);

  const [{ height, opacity: buttonsOpacity }, containerApi] = useSpring(() => ({
    height: 64,
    opacity: 0,
    config: { mass: 3, tension: 450, friction: 40, duration: 300 },
  }));

  const [{ opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    [],
  );

  // const [avatarSprings, avatarApi] = useSprings(
  //   BUTTONS.length,
  //   (i) => ({
  //     // y: 0,
  //   }),
  //   [],
  // );

  React.useLayoutEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y,
      );
    }

    // avatarApi.start((i) => ({
    //   y: avatarRefInitialPositions.current[i],
    //   immediate: true,
    // }));
  }, []);

  const backgroundTimeoutRef = React.useRef();
  const avatarTimeoutRef = React.useRef();

  const bindGestures = useGesture({
    onHover: ({ hovering }) => {
      if (hovering) {
        if (backgroundTimeoutRef.current) {
          clearTimeout(backgroundTimeoutRef.current);
        }
        if (avatarTimeoutRef.current) {
          clearTimeout(avatarTimeoutRef.current);
        }

        isVisible.current = true;

        setIsMenuOpen(true);
        api.start({
          opacity: 1,
        });

        containerApi.start({
          height: 68 * (BUTTONS.length + 1),
          opacity: 1,
        });
      } else {
        backgroundTimeoutRef.current = setTimeout(() => {
          api.start({
            opacity: 0,
          });
        }, 2000);

        avatarTimeoutRef.current = setTimeout(() => {
          containerApi.start({
            height: 64,
            opacity: 0,
            onRest: () => {
              isVisible.current = false;
              setIsMenuOpen(false);
            },
          });
          // avatarApi.start((i) => ({
          //   // y: avatarRefInitialPositions.current[i],
          //   onRest: () => {
          //     isVisible.current = false;
          //     setIsMenuOpen(false);
          //   },
          // }));
        }, 4000);
      }
    },
  });

  const { onPointerEnter, onPointerLeave, onPointerDown, ...restGestures } =
    bindGestures();

  const handlePointerDown = (isBackground) => (e) => {
    if (isBackground && !isVisible.current) {
      return;
    }

    if (onPointerDown) {
      onPointerDown(e);
    }
  };

  const [{ opacity: loadingOpacity }, loadingOpacityApi] = useSpring(() => ({
    opacity: 0,
    config: { mass: 0.5, tension: 850, friction: 40 },
  }));

  useEffect(() => {
    if (location.pathname !== "/") {
      loadingOpacityApi.start({
        opacity: 1,
      });
    } else {
      loadingOpacityApi.start({
        opacity: 0,
      });
    }
  }, [location.pathname]);

  return (
    <>
      {showContactMenu && (
        <BlurredBackground
          ref={containerRef}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={handlePointerDown(true)}
          {...restGestures}
          style={{
            height: height,
            opacity: loadingOpacity,
            backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
          }}
        >
          <FloatingButton
            ref={buttonRef}
            onPointerDown={handlePointerDown(false)}
            {...restGestures}
            style={{
              opacity: loadingOpacity,
              boxShadow: opacity.to(
                (o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 - o})`,
              ),
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#1a1a1a"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path d="M128,24A104,104,0,0,0,36.8,178l-8.5,29.9a16.1,16.1,0,0,0,4,15.8,15.8,15.8,0,0,0,15.7,4l30-8.5A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
              </svg>
            </span>
          </FloatingButton>
          {BUTTONS.map((button, index) => (
            <AvatarIcon
              key={index}
              style={{ opacity: buttonsOpacity }}
              href={button.url}
              target={"_blank"}
              // ref={(ref) => (avatarRefs.current[index] = ref)}
              // css={{
              //   backgroundColor: COLORS[index],
              // }}
              // style={{
              //   ...springs,
              // }}
            >
              <ButtonText>{button.text}</ButtonText>
              {BUTTONS[index].icon}
            </AvatarIcon>
          ))}
        </BlurredBackground>
      )}
    </>
  );
};

export default ContactMenu;
