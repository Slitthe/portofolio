import React from "react";
import { Glass } from "../GlassContainer/GlassContainer.js";
import styled from "styled-components";
import projectThumbnail from "../../assets/project_thumbnail_2.png";
import Skills from "../Skills/Skills.jsx";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  justify-items: center;
  align-items: start;
`;
const ProjectItem = styled(Glass)`
  width: 400px;
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

function Projects(props) {
  return (
    <Wrapper>
      <ProjectItem>
        <ImageWrapper>
          <ProjectImage src={projectThumbnail} />
        </ImageWrapper>
        <ProjectContent>
          <ProjectName className={"title"}>Wack-a-pol</ProjectName>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            animi doloremque eligendi hic illum nesciunt optio possimus tempora?
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
      <ProjectItem>
        <ImageWrapper>
          <ProjectImage src={projectThumbnail} />
        </ImageWrapper>
        <ProjectContent>
          <ProjectName className={"title"}>Wack-a-pol</ProjectName>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            animi doloremque eligendi hic illum nesciunt optio possimus tempora?
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
      <ProjectItem>
        <ImageWrapper>
          <ProjectImage src={projectThumbnail} />
        </ImageWrapper>
        <ProjectContent>
          <ProjectName className={"title"}>Wack-a-pol</ProjectName>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            animi doloremque eligendi hic illum nesciunt optio possimus tempora?
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
      <GoToNextPage to={"/projects/archive"}>Archive</GoToNextPage>
    </Wrapper>
  );
}

export default Projects;
