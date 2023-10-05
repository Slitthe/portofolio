import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { debounce } from "lodash";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { useGesture } from "react-use-gesture";

const Base = animated(styled.div`
  position: absolute;
  z-index: 20;
`);

function FullScreenExpandable({
  targetRef,
  wrapperRef,
  component,
  children,
  onMinimized,
  style = {},
}) {
  useRef(animated(component));
  const [isMaximized, setIsMaximized] = useState(true);
  const isDesktop = useMediaQuery(1100);

  const isDesktopRef = useRef(isDesktop);
  isDesktopRef.current = isDesktop;
  function getOffsetValues() {
    const {
      offsetWidth: width,
      offsetHeight: height,
      offsetLeft: left,
      offsetTop: top,
    } = targetRef?.current;
    return {
      left: left,
      top: top,
      // right: wrapperRef?.current.offsetParent.scrollWidth - width - left,
      // bottom: wrapperRef?.current.offsetParent.scrollHeight - height - top,
      height: `${height}px`,
      width: `${width}px`,
    };
  }

  const [springStyle, api] = useSpring(() => ({
    ...getOffsetValues(),
    config: { mass: 5, tension: 850, friction: 40, duration: 150 },
  }));

  const onScroll = useCallback(
    debounce(() => {
      if (isMaximized) {
        api.start({
          // right: 0,
          // bottom: 0,
          width: `${window.innerWidth - (isDesktopRef.current ? 250 : 0)}px`,
          height: `${window.innerHeight}px`,
          left: 0,
          top: wrapperRef?.current.scrollTop,
        });
      }
    }, 100),
    [],
  );

  useGesture(
    {
      onScroll: onScroll,
    },
    { domTarget: wrapperRef?.current, eventOptions: { passive: false } },
  );

  useEffect(() => {
    if (isMaximized) {
      api.start({
        // right: 0,
        // bottom: 0,
        width: `${wrapperRef.current.scrollWidth - 1}px`,
        height: `${window.innerHeight}px`,
        left: 0,
        top: wrapperRef?.current.scrollTop,
      });
    } else {
      const initialPos = {
        ...getOffsetValues(),
      };

      api.start({
        ...initialPos,
        onRest: () => onMinimized(),
      });
    }
  }, [isMaximized]);

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMaximized = () => setIsMaximized((prev) => !prev);

  return (
    <Base
      style={{
        position: "absolute",
        ...style,
        ...springStyle,
      }}
    >
      {children(toggleMaximized)}
    </Base>
  );
}

export default FullScreenExpandable;
