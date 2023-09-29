import "./App.css";
import styled from "styled-components";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Experience from "./components/Experience/Experience.jsx";
import background from "./assets/background.jpg";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Archive from "./components/Archive/Archive.jsx";
import { useTransition, animated, useSpring } from "react-spring";
import { useCallback, useEffect, useRef } from "react";
import { useDrag, useGesture, useScroll } from "react-use-gesture";
import { debounce } from "lodash";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  user-select: none;

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
  }
`;

const SidebarWrapper = styled.div`
  text-align: right;
  width: 250px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: row;
    height: auto;
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  background: gray;
  flex: 1;
  overflow: auto;
  height: 100%;
  background: url(${background});
  position: relative;
`;

const navigationPaths = ["/", "/projects", "/projects/archive", "/experience"];

function App() {
  const domTarget = useRef(null);
  const widhtEl = useRef(null);
  const navigate = useNavigate();

  const [{ top }, api] = useSpring(() => ({
    scale: 1,
    top: 0,
    config: { mass: 5, tension: 150, friction: 40 },
  }));

  // const location = useLocation();
  // const debounced = debounce((data) => {
  //
  // }, 1);

  // const test = useCallback(debounced, []);

  useDrag(({ down, movement: [mx, my] }) => {
    // console.log(down);
    // api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  });
  useGesture(
    {
      onDrag: (data) => {
        // data.movement[1] = data.movement[1] * 14;
        console.log(-data.movement[1]);

        if (Math.abs(-data.movement[1]) > 150 && !data.dragging) {
          const offset = -data.movement[1] > 0 ? 1 : -1;
          const nextItem =
            navigationPaths[
              navigationPaths.indexOf(location.pathname) + offset
            ];
          if (nextItem) {
            navigate(nextItem);
          }
        }
        // console.log(-data.movement[1]);
        // console.log(
        //   Math.abs(
        //     document.querySelector(":root").scrollHeight -
        //       document.querySelector(":root").scrollTop -
        //       document.querySelector(":root").clientHeight,
        //   ) < 1,
        // );
        if (
          data.dragging &&
          Math.abs(
            document.querySelector(":root").scrollHeight -
              document.querySelector(":root").scrollTop -
              document.querySelector(":root").clientHeight,
          ) < 1
        ) {
          if (-data.movement[1] > 0) {
            api({ top: data.movement[1] });
          } else {
            api({ top: data.movement[1] });
          }
        } else {
          api({ top: 0 });
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

  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0,
  //     transform: "translate3d(100%,0,0)",
  //   },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });

  return (
    <AppWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <PageWrapper ref={domTarget}>
        {transitions((props, item, key) => (
          <animated.div
            key={key}
            style={{ ...props, top }}
            className="animated-page"
          >
            <Routes location={item}>
              <Route exact path="/" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/projects/archive" element={<Archive />} />
              <Route exact path="/experience" element={<Experience />} />
            </Routes>
          </animated.div>
        ))}
      </PageWrapper>
    </AppWrapper>
  );
}

export default App;
