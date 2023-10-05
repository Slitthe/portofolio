import React, { useContext, useEffect, useRef, useState } from "react";
import { Glass } from "../../components/GlassContainer/GlassContainer.js";
import styled from "styled-components";
import Skills from "../../components/Skills/Skills.jsx";
import GoToNextPage from "../../components/GoToNextPage/GoToNextPage.jsx";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { FiExternalLink, FiMinimize } from "react-icons/fi";
import { projects } from "../../lib/data.js";
import FullScreenExpandable from "../../components/FullScreenExpandable/FullScreenExpandable.jsx";
import { FiMaximize } from "react-icons/fi";
import { UIElementsVisibilityContext } from "../../context/UIElementsVisibilityContext.jsx";

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  justify-items: center;
  align-items: start;
  padding: 20px 20px 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const LinkIcon = styled(FiExternalLink)`
  margin-left: 0.5em;
`;
const ProjectItem = animated(styled(Glass)`
  max-width: 400px;

  margin-top: 80px;
`);

const ImageWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.$isMaximized ? "auto" : "200px")};
  flex: ${(props) => (props.$isMaximized ? 1 : 0)};
`;
const ProjectImage = styled.img`
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProjectContent = styled.div`
  padding: 10px 20px;
  ${(props) =>
    props.$isMaximized ? "background: rgba(47, 47, 47, 0.85);" : ""};
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    display: flex;
    align-items: center;
  }

  & > *:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  & > a {
    font-weight: 500;
    color: var(--text-main-color);
    text-decoration: none;
  }
`;

const ProjectDescription = styled.div`
  font-weight: 300;
  margin-bottom: 8px;
`;

const Project = ({ children }) => {
  const domTarget = useRef(null);
  const targetRef = useRef(null);
  const { setShowContactMenu, setShowMenuButton } = useContext(
    UIElementsVisibilityContext,
  );
  const wrapperRef = useRef(document.querySelector(".animated-page"));
  wrapperRef.current = document.querySelector(".animated-page");
  const [isMaximized, setIsMaximized] = useState(false);
  const [, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) => {
        return !hovering
          ? api.start({ scale: 1.0 })
          : api.start({ scale: 1.05 });
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  useEffect(() => {
    setShowContactMenu(!isMaximized);
    setShowMenuButton(!isMaximized);
  }, [isMaximized]);

  function onMinimizedHandler() {
    setIsMaximized(false);
  }

  return (
    <animated.div
      ref={domTarget}
      // style={{
      //   scale,
      // }}
    >
      <ProjectItem ref={targetRef}>
        {children(isMaximized, setIsMaximized)}
      </ProjectItem>
      {isMaximized && (
        <FullScreenExpandable
          onMinimized={onMinimizedHandler}
          component={ProjectItem}
          targetRef={targetRef}
          wrapperRef={wrapperRef}
          style={{ display: "flex" }}
        >
          {(toggle) => {
            return (
              <Glass
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  background: "#2f2f2f94",
                }}
              >
                {children(isMaximized, toggle)}
              </Glass>
            );
          }}
        </FullScreenExpandable>
      )}
    </animated.div>
  );
};

const ProjectPreviewFrame = styled.iframe`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border: none;
`;

const WindowToolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 5px;

  .full-screen-icon {
    //background: red;
    font-size: 16px;
    width: 20px;
    height: 20px;
    &:hover {
      cursor: pointer;
    }
    //padding: 10px;
  }
`;

const AnimatedMinimize = animated(FiMinimize);
const AnimatedMaximize = animated(FiMaximize);

const MaximizeToolbar = ({ isMaximized, setIsMaximized }) => {
  const domTarget = useRef(null);

  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) => {
        return !hovering
          ? api.start({ scale: 1.0 })
          : api.start({ scale: 1.15 });
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <WindowToolbar>
      <span ref={domTarget} style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: 4 }}>
          {isMaximized ? "Close" : "Preview"}
        </span>
        {isMaximized ? (
          <AnimatedMinimize
            style={{ scale }}
            onClick={() => setIsMaximized(false)}
            className={"full-screen-icon"}
          />
        ) : (
          <AnimatedMaximize
            style={{ scale }}
            onClick={() => setIsMaximized(true)}
            className={"full-screen-icon"}
          />
        )}
      </span>
    </WindowToolbar>
  );
};

function Projects() {
  return (
    <>
      <Wrapper className="projects-wrapper">
        {projects.map((project) => {
          return (
            <Project key={project.title.name}>
              {(isMaximized, setIsMaximized) => {
                return (
                  <>
                    <MaximizeToolbar
                      isMaximized={isMaximized}
                      setIsMaximized={setIsMaximized}
                    />
                    <ImageWrapper $isMaximized={isMaximized}>
                      {isMaximized ? (
                        <ProjectPreviewFrame
                          src={project.title.href}
                        ></ProjectPreviewFrame>
                      ) : (
                        <ProjectImage src={project.image} />
                      )}
                    </ImageWrapper>
                    <ProjectContent $isMaximized={isMaximized}>
                      <ProjectTitle className={"title"}>
                        <a href={project.title.href} target="_blank">
                          {project.title.name} <LinkIcon />
                        </a>
                        {project.sourceHref && (
                          <a
                            target="_blank"
                            href={project.sourceHref || null}
                            onClick={(e) => {
                              if (!project.sourceHref) {
                                e.preventDefault();
                              }
                            }}
                          >
                            Source {project.sourceHref && <LinkIcon />}
                          </a>
                        )}
                      </ProjectTitle>
                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>
                      <Skills skills={project.skills} />
                    </ProjectContent>
                  </>
                );
              }}
            </Project>
          );
        })}

        <GoToNextPage isTop to={"/about"}>
          About
        </GoToNextPage>
        <GoToNextPage to={"/archive"}>Archive</GoToNextPage>
      </Wrapper>
    </>
  );
}

export default Projects;
