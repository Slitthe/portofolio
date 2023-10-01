import React, { useEffect } from "react";
import { Glass } from "../../components/GlassContainer/GlassContainer.js";
import styled from "styled-components";
import Skills from "../../components/Skills/Skills.jsx";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import GoToNextPage from "../../components/GoToNextPage/GoToNextPage.jsx";
import DraggableItem from "../../components/DraggableItem/DraggableItem.jsx";
import { experienceItems } from "../../lib/data.js";

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding: 100px 20px 100px;
`;

const TimelineLine = styled.div`
  position: absolute;
  box-shadow: 0 0 3px 4px var(--text-main-color);
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
  color: var(--text-main-color);
`;

const TimelineContent = styled.div`
  font-weight: 300;
  margin-bottom: 16px;
`;

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
