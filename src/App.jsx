import "./App.css";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Experience from "./components/Experience/Experience.jsx";
import background from "./assets/background.jpg";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Archive from "./components/Archive/Archive.jsx";
import { useTransition, animated } from "react-spring";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const SidebarWrapper = styled.div`
  text-align: right;
  width: 250px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

const PageWrapper = styled.div`
  background: gray;
  flex: 1;
  overflow: auto;
  background: url(${background});
`;

function App() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { height: "0%", opacity: 0 },
    enter: { height: "100%", opacity: 1 },
    leave: { height: "0%", opacity: 0 },
  });

  return (
    <AppWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <PageWrapper>
        {transitions((props, item, ...rest) => {
          console.log({ props, item, rest });
          return (
            <animated.div style={props}>
              <Routes location={item}>
                <Route exact path="/" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/projects/archive" element={<Archive />} />
                <Route exact path="/experience" element={<Experience />} />
              </Routes>
            </animated.div>
          );
        })}
      </PageWrapper>
    </AppWrapper>
  );
}

export default App;
