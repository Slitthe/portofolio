import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import React from "react";

const DraggableItem = ({ children }) => {
  const [{ x, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: { mass: 5, tension: 450, friction: 40 },
  }));
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,

      immediate: (name) => active && name === "x",
    }),
  );

  return (
    <animated.div {...bind()}>
      <animated.div style={{ x, scale }}>{children}</animated.div>
    </animated.div>
  );
};

export default DraggableItem;
