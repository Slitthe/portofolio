import React from "react";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import styled from "styled-components";
import { Glass } from "../GlassContainer/GlassContainer.js";
import Skills from "../Skills/Skills.jsx";
import { FiCode, FiExternalLink } from "react-icons/fi";

const Wrapper = styled.div`
  padding-top: 100px;
  position: relative;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Row = styled(Glass)`
  display: flex;
  width: 100%;
`;

const Cell = styled.div`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProjectsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  align-items: center;
  gap: 20px;
`;

const YearCell = styled(Cell)`
  width: 100px;
  border-right: 1px solid rgba(255, 255, 255, 0.175);
`;

const NameCell = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  width: 200px;
  color: #00b4b4;
  font-weight: 500;
  border-right: 1px solid rgba(255, 255, 255, 0.175);
  &:hover {
    text-decoration: underline;
  }
`;
const SkillsCell = styled(Cell)`
  flex: 1;
  border-right: 1px solid rgba(255, 255, 255, 0.175);
`;

const LinkIcon = styled(FiExternalLink)`
  margin-left: 0.5em;
`;

const CodeCell = styled.a`
  width: 50px;
  margin: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  cursor: pointer;
  color: #00b4b4;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

function Archive(props) {
  return (
    <Wrapper>
      <ProjectsTableWrapper>
        <Row>
          <YearCell>2023</YearCell>
          <NameCell>
            Tic Tac Toe <LinkIcon />
          </NameCell>
          <SkillsCell>
            <Skills
              skills={[
                "React",
                "Typescript",
                "CSS",
                "HTML",
                "Tailwind",
                "React",
                "React",
                "React",
                "React",
                "React",
                "React",
              ]}
            />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2022</YearCell>
          <NameCell>HalArt</NameCell>
          <SkillsCell>
            <Skills skills={["React", "Typescript"]} />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2023</YearCell>
          <NameCell>Tic Tac Toe</NameCell>
          <SkillsCell>
            <Skills
              skills={[
                "React",
                "Typescript",
                "CSS",
                "HTML",
                "Tailwind",
                "React",
                "React",
                "React",
                "React",
                "React",
                "React",
              ]}
            />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2022</YearCell>
          <NameCell>
            HalArt <FiExternalLink />
          </NameCell>
          <SkillsCell>
            <Skills skills={["React", "Typescript"]} />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2022</YearCell>
          <NameCell>HalArt</NameCell>
          <SkillsCell>
            <Skills skills={["React", "Typescript"]} />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2022</YearCell>
          <NameCell>HalArt</NameCell>
          <SkillsCell>
            <Skills skills={["React", "Typescript"]} />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
        <Row>
          <YearCell>2022</YearCell>
          <NameCell>HalArt</NameCell>
          <SkillsCell>
            <Skills skills={["React", "Typescript"]} />
          </SkillsCell>
          <CodeCell href={"#"}>
            <FiCode />
          </CodeCell>
        </Row>
      </ProjectsTableWrapper>

      <GoToNextPage to={"/experience"}>Experience</GoToNextPage>
    </Wrapper>
  );
}

export default Archive;
