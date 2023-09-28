import React from "react";
import styled from "styled-components";

const SkillPill = styled.span`
  background: #00b4b4;
  font-weight: 500;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 16px;
  color: #062327;
  font-size: 12px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

function Skills({ skills }) {
  return (
    <SkillsWrapper>
      {skills.map((skill) => (
        <SkillPill>{skill}</SkillPill>
      ))}
    </SkillsWrapper>
  );
}

export default Skills;
