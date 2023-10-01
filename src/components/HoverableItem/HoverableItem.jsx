import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";

export const HoverableItem = ({
  children,
  component,
  magnitude = 1.1,
  style = {},
  ...rest
}) => {
  const domTarget = useRef(null);
  const elementRef = useRef(animated(component));
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) =>
        !hovering ? api({ scale: 1.0 }) : api({ scale: magnitude }),
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <elementRef.current ref={domTarget} style={{ scale, ...style }} {...rest}>
      {children}
    </elementRef.current>
  );
};
