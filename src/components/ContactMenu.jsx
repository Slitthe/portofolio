import * as React from "react";
import { animated, useSpring, useSprings } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

const BUTTON_SIZE = 56;

const BUTTONS = [
  {
    icon: <FiGithub />,
  },
  {
    icon: <AiOutlineLinkedin />,
  },
  {
    icon: <AiOutlineFilePdf />,
  },
];

const ImageContainer = styled.div`
    width: 100vw;
    height: 100vh;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    },
`;

const BlurredBackground = styled(animated.div)`
  position: fixed;
  z-index: 500;
  right: 0;
  bottom: 0;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  //backdrop-filter: blur(8px);
  align-items: center;
  touch-action: none;
`;

const GrabberButton = styled(animated.button)`
  height: 17px;
  border-radius: 8px;
  background-color: #cccccc33;
  border: none;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  width: calc(100% - 16px);

  & > svg {
    color: white;
    transform: rotate(90deg);
  },
`;

const AvatarIcon = styled(animated.div)`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: 50%;
  margin-left: 4px;
  margin-right: 4px;

  display: flex;
  align-items: center;
  align-content: center;
  font-size: 32px;
  background: #008080;
  justify-content: center;
  color: black;
  cursor: pointer;

  position: relative;

  transition: background ease-in-out 0.2s;

  &:hover {
    color: #008080;
    background: #000;
    border: 2px solid #008080;
  }
`;

const FloatingButton = styled(animated.div)`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: 50%;
  border: none;
  position: relative;
  background-clip: content-box;
  z-index: 0;
  touch-action: none;

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
    background-color:#008080;
  },
`;

const ContactMenu = () => {
  const location = useLocation();
  const buttonRef = React.useRef(null);
  const avatarRefs = React.useRef([]);
  const avatarRefInitialPositions = React.useRef([]);
  const containerRef = React.useRef(null);

  const isVisible = React.useRef(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    [],
  );

  const [avatarSprings, avatarApi] = useSprings(
    BUTTONS.length,
    (i) => ({
      y: 0,
    }),
    [],
  );

  React.useLayoutEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y,
      );
    }

    avatarApi.start((i) => ({
      y: avatarRefInitialPositions.current[i],
      immediate: true,
    }));
  }, []);

  const getBounds = React.useCallback(() => {
    const { height, width } = containerRef.current.getBoundingClientRect();

    return {
      top: 0,
      left: 0,
      right: window.innerWidth - width,
      bottom: window.innerHeight - height,
    };
  }, []);

  const backgroundTimeoutRef = React.useRef();
  const avatarTimeoutRef = React.useRef();

  const bindGestures = useGesture(
    {
      onHover: ({ hovering }) => {
        if (hovering) {
          if (backgroundTimeoutRef.current) {
            clearTimeout(backgroundTimeoutRef.current);
          }
          if (avatarTimeoutRef.current) {
            clearTimeout(avatarTimeoutRef.current);
          }

          isVisible.current = true;

          api.start({
            opacity: 1,
          });

          avatarApi.start({
            y: 0,
          });
        } else {
          backgroundTimeoutRef.current = setTimeout(() => {
            api.start({
              opacity: 0,
            });
          }, 2000);

          avatarTimeoutRef.current = setTimeout(() => {
            avatarApi.start((i) => ({
              y: avatarRefInitialPositions.current[i],
              onRest: () => {
                isVisible.current = false;
              },
            }));
          }, 4000);
        }
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
        bounds: getBounds,
        rubberband: true,
      },
    },
  );

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
    // console.log(location.pathname);
    if (location.pathname !== "/") {
      loadingOpacityApi({
        opacity: 1,
      });

      // console.log(location.pathname);
    } else {
      loadingOpacityApi({
        opacity: 0,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <BlurredBackground
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          opacity: loadingOpacity,
          backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        }}
      >
        {avatarSprings.map((springs, index) => (
          <AvatarIcon
            key={BUTTONS[index]}
            ref={(ref) => (avatarRefs.current[index] = ref)}
            // css={{
            //   backgroundColor: COLORS[index],
            // }}
            style={{
              ...springs,
            }}
          >
            {BUTTONS[index].icon}
          </AvatarIcon>
        ))}
        <FloatingButton
          ref={buttonRef}
          onPointerEnter={onPointerEnter}
          onPointerDown={handlePointerDown(false)}
          {...restGestures}
          style={{
            opacity: loadingOpacity,
            boxShadow: opacity.to(
              (o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`,
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
      </BlurredBackground>
    </>
  );
};

export default ContactMenu;
