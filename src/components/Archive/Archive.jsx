import React, { useRef } from "react";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import styled from "styled-components";
import { Glass } from "../GlassContainer/GlassContainer.js";
import Skills from "../Skills/Skills.jsx";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";

const Wrapper = styled.div`
  padding-top: 80px;
  position: relative;
  min-height: 100%;
  display: flex;
  padding-bottom: 75px;
  justify-content: center;
`;

// const Row = styled(Glass)`
//   display: flex;
//   width: 100%;
// `;

const HoverableRow = styled(animated.div)`
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

const Row = ({ children }) => {
  const domTarget = useRef(null);
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) =>
        !hovering ? api({ scale: 1.0 }) : api({ scale: 1.02 }),
    },
    { domTarget, eventOptions: { passive: false } },
  );

  return (
    <HoverableRow
      ref={domTarget}
      style={{
        scale,
      }}
    >
      {children}
    </HoverableRow>
  );
};

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
  width: 200px;
  color: #00b4b4;
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

  cursor: pointer;
  color: #00b4b4;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const archiveItems = [
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
  {
    year: 2023,
    projectName: "Tic Tac Toe",
    skills: [
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
    ],
    codeUrl: "#",
  },
];

function Archive(props) {
  return (
    <>
      <Wrapper>
        <ProjectsTableWrapper>
          {[...archiveItems, ...archiveItems, ...archiveItems].map(
            (archiveItem) => {
              return (
                <Row>
                  <YearCell>{archiveItem.year}</YearCell>
                  <NameCell>
                    {archiveItem.projectName} <LinkIcon />
                  </NameCell>
                  <SkillsCell>
                    <Skills skills={archiveItem.skills} />
                  </SkillsCell>
                  <CodeCell href={archiveItem.codeUrl}>
                    <FiCode />
                  </CodeCell>
                </Row>
              );
            },
          )}
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
