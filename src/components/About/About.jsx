import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";

const PageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  bottom: 100px;
  right: 100px;
`;

const Name = styled.h1`
  font-size: 90px;
  background-clip: text;
  -webkit-background-clip: text;
  margin: 0;
`;

const Description = styled.div`
  font-size: 90px;
  font-weight: 300;
  color: #d3d3d3;
`;

function About(props) {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Name>Silviu,</Name>
        <Description>Front-end Developer</Description>
      </ContentWrapper>

      <GoToNextPage to={"/projects"}>Projects</GoToNextPage>
    </PageWrapper>
  );
}

export default About;
