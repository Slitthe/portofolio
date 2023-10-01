import React, { useRef } from "react";
import { Glass } from "../../components/GlassContainer/GlassContainer.js";
import styled from "styled-components";
import Skills from "../../components/Skills/Skills.jsx";
import GoToNextPage from "../../components/GoToNextPage/GoToNextPage.jsx";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../lib/data.js";

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
const ProjectItem = styled(Glass)`
  max-width: 400px;

  margin-top: 80px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
`;
const ProjectImage = styled.img`
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProjectContent = styled.div`
  padding: 10px 20px;
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
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) => {
        return !hovering ? api({ scale: 1.0 }) : api({ scale: 1.05 });
      },
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <animated.div
      ref={domTarget}
      style={{
        scale,
      }}
    >
      {children}
    </animated.div>
  );
};

function Projects() {
  return (
    <>
      <Wrapper>
        {projects.map((project) => {
          return (
            <Project>
              <ProjectItem>
                <ImageWrapper>
                  <ProjectImage src={project.image} />
                </ImageWrapper>
                <ProjectContent>
                  <ProjectTitle className={"title"}>
                    <a href={project.title.href}>
                      {project.title.name} <LinkIcon />
                    </a>
                    <a href={project.sourceHref}>
                      Source <LinkIcon />
                    </a>
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <Skills skills={project.skills} />
                </ProjectContent>
              </ProjectItem>
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
