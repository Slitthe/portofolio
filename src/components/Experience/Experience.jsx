import React from "react";
import { Glass } from "../GlassContainer/GlassContainer.js";
import styled from "styled-components";
import Skills from "../Skills/Skills.jsx";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding: 100px 20px 100px;
`;

const TimelineLine = styled.div`
  position: absolute;
  box-shadow: 0 0 3px 4px #00b4b4;
  top: 100px;
  bottom: 0;
  left: 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const TimelineCard = styled(Glass)`
  max-width: 400px;
  //padding: 10px 20px;
  flex: 1;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const TimelineRow = styled.div`
  width: 100%;
  display: flex;
  gap: 64px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const TimelineItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    // background: ${({ $isLeft }) => ($isLeft ? "red" : "blue")};
    order: ${({ $showTopMobile }) => ($showTopMobile ? 1 : 5)};
  }

  align-items: ${({ $isLeft }) => ($isLeft ? "flex-end" : "flex-start")};
`;

const TimelineCardSection = styled.div`
  padding: 10px 20px;
`;

const TimelineTitle = styled.div`
  color: #00b4b4;
`;

const TimelineContent = styled.div`
  font-weight: 300;
  margin-bottom: 16px;
`;

const DraggableItem = ({ children }) => {
  const [{ x, scale }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    config: { mass: 5, tension: 450, friction: 40 },
  }));
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,

      immediate: (name) => active && name === "x",
    }),
  );

  return (
    <animated.div {...bind()}>
      <animated.div style={{ x, scale }}>{children}</animated.div>
    </animated.div>
  );
};

const experienceItems = [
  {
    title: "Senior Front-End Developer",
    content: `As a senior front-end developer, I played a pivotal role in creating stunning and responsive user interfaces for a wide range of web applications. My responsibilities included collaborating with cross-functional teams, translating design mockups into pixel-perfect HTML/CSS, and optimizing performance for exceptional user experiences.`,
    skills: ["HTML5", "CSS3/Sass", "JavaScript/jQuery", "Git", "React"],
    range: "2021 - 2022",
  },
  {
    title: "Senior Front-End Developer",
    content: `As a senior front-end developer, I played a pivotal role in creating stunning and responsive user interfaces for a wide range of web applications. My responsibilities included collaborating with cross-functional teams, translating design mockups into pixel-perfect HTML/CSS, and optimizing performance for exceptional user experiences.`,
    skills: ["HTML5", "CSS3/Sass", "JavaScript/jQuery", "Git", "React"],
    range: "2021 - 2022",
  },
  {
    title: "Senior Front-End Developer",
    content: `As a senior front-end developer, I played a pivotal role in creating stunning and responsive user interfaces for a wide range of web applications. My responsibilities included collaborating with cross-functional teams, translating design mockups into pixel-perfect HTML/CSS, and optimizing performance for exceptional user experiences.`,
    skills: ["HTML5", "CSS3/Sass", "JavaScript/jQuery", "Git", "React"],
    range: "2021 - 2022",
  },
  {
    title: "Senior Front-End Developer",
    content: `As a senior front-end developer, I played a pivotal role in creating stunning and responsive user interfaces for a wide range of web applications. My responsibilities included collaborating with cross-functional teams, translating design mockups into pixel-perfect HTML/CSS, and optimizing performance for exceptional user experiences.`,
    skills: ["HTML5", "CSS3/Sass", "JavaScript/jQuery", "Git", "React"],
    range: "2021 - 2022",
  },
  {
    title: "Senior Front-End Developer",
    content: `As a senior front-end developer, I played a pivotal role in creating stunning and responsive user interfaces for a wide range of web applications. My responsibilities included collaborating with cross-functional teams, translating design mockups into pixel-perfect HTML/CSS, and optimizing performance for exceptional user experiences.`,
    skills: ["HTML5", "CSS3/Sass", "JavaScript/jQuery", "Git", "React"],
    range: "2021 - 2022",
  },
];

function Experience() {
  return (
    <>
      <Wrapper>
        <GoToNextPage isTop to={"/archive"}>
          Archive
        </GoToNextPage>
        <TimelineLine />

        <Timeline>
          {experienceItems.map((experience, index) => {
            const contentItem = (
              <TimelineItem $isLeft={index % 2 === 0}>
                <DraggableItem>
                  <TimelineCard>
                    <TimelineCardSection>
                      <TimelineTitle>{experience.title}</TimelineTitle>
                      <TimelineContent>{experience.content}</TimelineContent>
                      <Skills skills={experience.skills} />
                    </TimelineCardSection>
                  </TimelineCard>
                </DraggableItem>
              </TimelineItem>
            );

            const rangeItem = (
              <TimelineItem
                $isLeft={index % 2 !== 0}
                $showTopMobile={index % 2 === 0}
              >
                2020-2021
              </TimelineItem>
            );
            return (
              <TimelineRow>
                {index % 2 === 0 ? contentItem : rangeItem}
                {index % 2 !== 0 ? contentItem : rangeItem}
              </TimelineRow>
            );
          })}
        </Timeline>
      </Wrapper>
    </>
  );
}

export default Experience;
