import "./App.css";
import styled from "styled-components";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Experience from "./components/Experience/Experience.jsx";
import background from "./assets/background.jpg";
import Projects from "./components/Projects/Projects.jsx";
import Home from "./components/Home/Home.jsx";
import Archive from "./components/Archive/Archive.jsx";
import { useTransition, animated, useSpring } from "react-spring";
import React, { useCallback, useEffect, useRef } from "react";
import { useDrag, useGesture, useScroll } from "react-use-gesture";
import { debounce } from "lodash";
// import { useInertiaScrolling } from "./hooks/useInertiaScrolling.jsx";
import About from "./components/About/About.jsx";
import ContactMenu from "./components/ContactMenu.jsx";
// import useCheckScrollBoundry from "./hooks/useCheckScrollBoundry.jsx";
// import Cursor from "./components/Cursor/Cursor.jsx";

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
  //background: gray;
  flex: 1;
  overflow: hidden;
  height: 100%;
  // background: url(${background});
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

let test = 0;
function App() {
  const domTarget = useRef(null);
  const widhtEl = useRef(null);
  const navigate = useNavigate();

  const [{ top, opacity }, api] = useSpring(() => ({
    scale: 1,
    top: 0,
    opacity: 1,
    config: { mass: 3, tension: 150, friction: 40 },
  }));

  // const location = useLocation();
  // const debounced = debounce((data) => {
  //
  // }, 1);

  // const test = useCallback(debounced, []);

  const isDraggingRef = useRef(false);
  useDrag(({ down, movement: [mx, my] }) => {
    // api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  });

  useGesture(
    {
      // onMove: (data) => console.log(data.dragging),
      onDrag: (data) => {
        // data.movement[1] *= 10;
        const root = document.querySelector(":root");
        const pageElement = document.querySelector(".animated-page");

        const isScrolledToBottom =
          Math.abs(
            pageElement.scrollHeight -
              pageElement.scrollTop -
              pageElement.clientHeight,
          ) < 1;

        const isScrolledToTop = pageElement.scrollTop === 0;

        if (!data.dragging) {
          api({ top: 0, opacity: 1 });
        }

        // console.log(
        //   data.vxvy[1].toFixed(2),
        //   { dragging: data.dragging },
        //   data.event.type,
        //   data,
        // );

        // console.log({
        //   data,
        //   isScrolledToBottom,
        //   isScrolledToTop,
        //   dragging: data.dragging,
        //   movement: data.movement[1],
        // });

        if (isScrolledToBottom || isScrolledToTop) {
          // console.log(-data.movement[1]);

          if (Math.abs(-data.movement[1]) > 150 && !data.dragging) {
            // if scroll is at top, only allow navigation up
            // if scroll is bottom only allow navigation down
            // -1 top 1 bottom
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
            // if (data.movement[1] > 0) {
            //   api({ top: data.movement[1], opacity: 0.5 });
            // } else {
            //   api({ top: data.movement[1], opacity: 0.5 });
            // }
          } else {
            isDraggingRef.current = false;

            // api({ top: 0, opacity: 1 });
          }
        }
        // data.movement[1] = data.movement[1] * 14;
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

  // const transitions = useTransition(location, {
  //   from: { y: 100, height: "0%", opacity: 0 },
  //   enter: { y: 0, height: "100%", opacity: 1 },
  //   leave: { y: 100, height: "0%", opacity: 0 },
  // });

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
  //useInertiaScrolling(document.querySelector(".animated-page"), isDraggingRef);

  // const { hasReachedBottom, hasReachedTop } = useCheckScrollBoundry(
  //   document.querySelector(".animated-page"),
  // );
  // console.log({ hasReachedTop, hasReachedBottom });

  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0,
  //     transform: "translate3d(100%,0,0)",
  //   },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });

  // const [{ opacity: swipeIndicatorOpacity }, swipeIndicatorOpacityApi] =
  //   useSpring(() => ({
  //     opacity: 0,
  //     config: { mass: 3, tension: 150, friction: 40 },
  //   }));
  //
  // useEffect(() => {
  //   console.log({ hasReachedTop, hasReachedBottom });
  //   if (hasReachedBottom || hasReachedTop) {
  //     swipeIndicatorOpacityApi({
  //       opacity: 1,
  //     });
  //   } else {
  //     swipeIndicatorOpacityApi({ opacity: 0 });
  //   }
  // }, [hasReachedTop, hasReachedBottom]);

  return (
    <>
      <ContactMenu />

      <AppWrapper>
        <Sidebar />

        <PageWrapper ref={domTarget}>
          {transitions((props, item, key) => {
            // console.log({ props, item, key });
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
      {/*<Cursor />*/}
    </>
  );
}

export default App;
