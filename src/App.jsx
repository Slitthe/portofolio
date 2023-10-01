import styled from "styled-components";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import background from "./assets/background.jpg";
import Projects from "./pages/Projects/Projects.jsx";
import Home from "./pages/Home/Home.jsx";
import Archive from "./pages/Archive/Archive.jsx";
import { useTransition, animated, useSpring } from "react-spring";
import React, { useEffect, useRef } from "react";
import { useGesture } from "react-use-gesture";

import About from "./pages/About/About.jsx";
import ContactMenu from "./components/ContactMenu.jsx";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  user-select: none;
  background: url(${background});

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  .animated-page {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: auto;
  }
`;

const PageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  height: 100%;
  position: relative;
`;

const DragToSwipeIndicator = styled.div`
  position: fixed;
  bottom: 10px;
  left: 30px;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 800px) {
    display: none;
  }
`;

const navigationPaths = ["/", "/about", "/projects", "/archive", "/experience"];

function App() {
  const domTarget = useRef(null);
  const navigate = useNavigate();

  const [{ top, opacity }, api] = useSpring(() => ({
    scale: 1,
    top: 0,
    opacity: 1,
    config: { mass: 3, tension: 150, friction: 40 },
  }));

  const isDraggingRef = useRef(false);

  useGesture(
    {
      onDrag: (data) => {
        const isScrolledToBottom = true;
        const isScrolledToTop = true;

        if (!data.dragging) {
          api({ top: 0, opacity: 1 });
        }
        if (isScrolledToBottom || isScrolledToTop) {
          if (Math.abs(-data.movement[1]) > 150 && !data.dragging) {
            const offset = -data.movement[1] > 0 ? 1 : -1;
            const nextItem =
              navigationPaths[
                navigationPaths.indexOf(location.pathname) + offset
              ];
            if (nextItem) {
              if (offset === -1 && isScrolledToTop) {
                navigate(nextItem);
              }

              if (offset === 1 && isScrolledToBottom) {
                navigate(nextItem);
              }
            }
          }

          if (data.dragging && (isScrolledToTop || isScrolledToBottom)) {
            isDraggingRef.current = true;

            if (isScrolledToBottom && data.movement[1] < 0) {
              api({ top: data.movement[1], opacity: 0.5 });
            }

            if (isScrolledToTop && data.movement[1] > 0) {
              api({ top: data.movement[1], opacity: 0.5 });
            }
          } else {
            isDraggingRef.current = false;
          }
        }
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  const location = useLocation();
  const currentPathIndex = navigationPaths.indexOf(location.pathname);
  const prevPathIndex = useRef(currentPathIndex);

  useEffect(() => {
    prevPathIndex.current = currentPathIndex;
  }, [currentPathIndex]);

  const direction = currentPathIndex > prevPathIndex.current ? "up" : "down";

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform:
        direction === "up" ? "translate3d(0,100%,0)" : "translate3d(0,-100%,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: {
      opacity: 0,
      transform:
        direction === "up" ? "translate3d(0,-100%,0)" : "translate3d(0,100%,0)",
    },
  });

  const animatedPageRef = useRef(null);

  return (
    <>
      <ContactMenu />

      <AppWrapper>
        <Sidebar />

        <PageWrapper ref={domTarget}>
          {transitions((props, item, key) => {
            return (
              <animated.div
                key={key}
                style={{ ...props, top, opacity }}
                className="animated-page"
                ref={animatedPageRef}
              >
                <Routes location={item}>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route exact path="/archive" element={<Archive />} />
                  <Route exact path="/experience" element={<Experience />} />
                </Routes>
              </animated.div>
            );
          })}
          <DragToSwipeIndicator>Drag to swipe</DragToSwipeIndicator>
        </PageWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
