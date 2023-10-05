import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";

const GoToNextPage = animated(styled(Link)`
  text-decoration: none;
  font-size: 30px;
  position: absolute;
  bottom: ${(props) => (props.$isTop ? "initial" : "8px")};
  top: ${(props) => (props.$isTop ? "8px" : "initial")};
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  color: #fff;
  border-radius: 8px;
  padding: 8px 48px;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  transform-origin: 0;

  @media (max-width: 1100px) {
    padding: 8px 24px;
  }

  .icon {
    order: ${(props) => (!props.$isTop ? 1 : -1)};
  }
`);

export default function ({ isXAnimated, children, isTop, ...rest }) {
  const domTarget = useRef(null);

  const [{ bottom }] = useSpring(
    () => ({
      from: { bottom: 8 },
      to: {
        bottom: 16,
      },
      loop: {
        reverse: true,
      },
    }),
    [],
  );

  const [{ transform }, scaleApi] = useSpring(() => ({
    background: `radial-gradient(0px circle at center, #61616161 50%, #413d3d00 51%)`,
    transform: `scale(1) translateX(-50%)`,
    config: { mass: 4, tension: 850, friction: 40 },
  }));

  const [{ background }, backgroundApi] = useSpring(() => ({
    background: `radial-gradient(0px circle at center, #61616161 50%, #413d3d00 51%)`,
    scale: 1,
    config: { mass: 1, tension: 250, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) => {
        if (!hovering) {
          scaleApi.start({
            transform: `scale(1) translateX(-50%)`,
          });
          backgroundApi.start({
            background: `radial-gradient(0px circle at center, #61616161 50%, #413d3d00 51%)`,
          });
        } else {
          scaleApi.start({
            transform: `scale(1.05) translateX(-50%)`,
          });
          backgroundApi.start({
            background: `radial-gradient(250px circle at center, #61616161 50%, #413d3d00 51%)`,
          });
        }
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  let styles = { background, transform };
  if (isXAnimated) {
    styles.bottom = bottom;
  }

  return (
    <GoToNextPage style={styles} ref={domTarget} $isTop={isTop} {...rest}>
      <div className={"children"}>{children}</div>
      <div className={"icon"}>
        {isTop ? <FiChevronUp /> : <FiChevronDown />}
      </div>
    </GoToNextPage>
  );
}
