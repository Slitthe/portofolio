import React, { useEffect, useRef } from "react";
import { Glass } from "../GlassContainer/GlassContainer.js";
import styled from "styled-components";
import projectThumbnail from "../../assets/project_thumbnail_2.png";
import Skills from "../Skills/Skills.jsx";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

const Wrapper = styled.div`
  min-height: 100%;
  padding: 20px;
  position: relative;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  justify-items: center;
  align-items: start;
  padding-bottom: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
const ProjectItem = styled(Glass)`
  max-width: 400px;
  cursor: pointer;
  margin-top: 80px;

  &:hover .title {
    text-decoration: underline;
  }
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

const ProjectName = styled.div`
  font-weight: 500;
  color: #00b4b4;
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
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Project>
          <ProjectItem>
            <ImageWrapper>
              <ProjectImage src={projectThumbnail} />
            </ImageWrapper>
            <ProjectContent>
              <ProjectName className={"title"}>Wack-a-pol</ProjectName>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus animi doloremque eligendi hic illum nesciunt optio
                possimus tempora?
              </ProjectDescription>
              <Skills
                skills={[
                  "React",
                  "Typescript",
                  "CSS",
                  "HTML",
                  "Tailwind",
                  "React",
                  "React",
                ]}
              />
            </ProjectContent>
          </ProjectItem>
        </Project>

        <Project>
          <ProjectItem>
            <ImageWrapper>
              <ProjectImage src={projectThumbnail} />
            </ImageWrapper>
            <ProjectContent>
              <ProjectName className={"title"}>Wack-a-pol</ProjectName>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus animi doloremque eligendi hic illum nesciunt optio
                possimus tempora?
              </ProjectDescription>
              <Skills
                skills={[
                  "React",
                  "Typescript",
                  "CSS",
                  "HTML",
                  "Tailwind",
                  "React",
                  "React",
                ]}
              />
            </ProjectContent>
          </ProjectItem>
        </Project>

        <Project>
          <ProjectItem>
            <ImageWrapper>
              <ProjectImage src={projectThumbnail} />
            </ImageWrapper>
            <ProjectContent>
              <ProjectName className={"title"}>Wack-a-pol</ProjectName>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus animi doloremque eligendi hic illum nesciunt optio
                possimus tempora?
              </ProjectDescription>
              <Skills
                skills={[
                  "React",
                  "Typescript",
                  "CSS",
                  "HTML",
                  "Tailwind",
                  "React",
                  "React",
                ]}
              />
            </ProjectContent>
          </ProjectItem>
        </Project>
        <GoToNextPage isTop to={"/about"}>
          About
        </GoToNextPage>
        <GoToNextPage to={"/archive"}>Archive</GoToNextPage>
      </Wrapper>
    </>
  );
}

export default Projects;
