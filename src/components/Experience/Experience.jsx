import React from "react";
import { Glass } from "../GlassContainer/GlassContainer.js";
import styled from "styled-components";
import Skills from "../Skills/Skills.jsx";

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding-top: 80px;
`;

const TimelineLine = styled.div`
  position: absolute;
  box-shadow: 0 0 3px 4px #00b4b4;
  top: 0;
  bottom: 0;
  left: 50%;
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const TimelineCard = styled(Glass)`
  width: 400px;
  //padding: 10px 20px;
  flex: 1;
`;

const TimelineRow = styled.div`
  width: 100%;
  display: flex;
  gap: 64px;
  align-items: center;
`;

const TimelineItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

function Experience(props) {
  return (
    <Wrapper>
      <TimelineLine />

      <Timeline>
        <TimelineRow>
          <TimelineItem $isLeft>
            <TimelineCard>
              <TimelineCardSection>
                <TimelineTitle>Senior Front-End Developer</TimelineTitle>
                <TimelineContent>
                  As a senior front-end developer, I played a pivotal role in
                  creating stunning and responsive user interfaces for a wide
                  range of web applications. My responsibilities included
                  collaborating with cross-functional teams, translating design
                  mockups into pixel-perfect HTML/CSS, and optimizing
                  performance for exceptional user experiences.
                </TimelineContent>
                <Skills
                  skills={[
                    "HTML5",
                    "CSS3/Sass",
                    "JavaScript/jQuery",
                    "Git",
                    "React",
                  ]}
                />
              </TimelineCardSection>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem>2020-2021</TimelineItem>
        </TimelineRow>

        <TimelineRow>
          <TimelineItem $isLeft>2020-2021</TimelineItem>

          <TimelineItem>
            <TimelineCard>
              <TimelineCardSection>
                <TimelineTitle>Front-end developer</TimelineTitle>
                <TimelineContent>
                  Did some important stuff bla bla Did some important stuff bla
                  blaDid some important stuff bla blaDid some important stuff
                  bla blaDid some important stuff bla bla
                </TimelineContent>
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
              </TimelineCardSection>
            </TimelineCard>
          </TimelineItem>
        </TimelineRow>

        <TimelineRow>
          <TimelineItem $isLeft>
            <TimelineCard>
              <TimelineCardSection>
                <TimelineTitle>Front-end developer</TimelineTitle>
                <TimelineContent>
                  Did some important stuff bla bla Did some important stuff bla
                  blaDid some important stuff bla blaDid some important stuff
                  bla blaDid some important stuff bla bla
                </TimelineContent>
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
              </TimelineCardSection>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem>2020-2021</TimelineItem>
        </TimelineRow>
      </Timeline>
    </Wrapper>
  );
}

export default Experience;
