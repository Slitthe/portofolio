import React, { useEffect, useRef } from "react";
import GoToNextPage from "../../components/GoToNextPage/GoToNextPage.jsx";
import styled from "styled-components";
import { Glass } from "../../components/GlassContainer/GlassContainer.js";
import Skills from "../../components/Skills/Skills.jsx";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import { HoverableItem } from "../../components/HoverableItem/HoverableItem.jsx";
import { archiveItems } from "../../lib/data.js";

const Wrapper = styled.div`
  padding-top: 80px;
  position: relative;
  min-height: 100%;
  display: flex;
  padding-bottom: 75px;
  justify-content: center;
`;

const Row = styled(animated.div)`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.175);
  border-radius: 16px;
  transition: background ease-in-out 0.4s;

  display: flex;
  flex-wrap: wrap;

  width: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

const Cell = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const ProjectsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  align-items: center;
  gap: 20px;
  padding: 20px;
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
  text-decoration: none;
  width: 200px;
  color: var(--text-main-color);
  font-weight: 500;
  border-right: 1px solid rgba(255, 255, 255, 0.175);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    flex: 1;
  }
`;
const SkillsCell = styled(Cell)`
  flex: 1;
  border-right: 1px solid rgba(255, 255, 255, 0.175);

  @media (max-width: 1000px) {
    order: 3;
    min-width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.175);
    border-right: none;
  }
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
  text-decoration: none;

  cursor: pointer;
  color: var(--text-main-color);
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

function Archive() {
  return (
    <>
      <Wrapper>
        <ProjectsTableWrapper>
          {archiveItems.map((archiveItem) => {
            return (
              <Row>
                <YearCell>{archiveItem.year}</YearCell>
                <HoverableItem component={NameCell} href={"#"}>
                  {archiveItem.projectName} <LinkIcon />
                </HoverableItem>

                <SkillsCell>
                  <Skills skills={archiveItem.skills} />
                </SkillsCell>

                <HoverableItem
                  component={CodeCell}
                  href={archiveItem.codeUrl}
                  magnitude={1.2}
                >
                  <FiGithub />
                </HoverableItem>
              </Row>
            );
          })}
        </ProjectsTableWrapper>
        <GoToNextPage isTop to={"/projects"}>
          Projects
        </GoToNextPage>

        <GoToNextPage to={"/experience"}>Experience</GoToNextPage>
      </Wrapper>
    </>
  );
}

export default Archive;
