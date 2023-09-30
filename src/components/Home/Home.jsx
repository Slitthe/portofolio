import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import { useSpring, animated, useSpringRef } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";

const PageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 30px;
`;

const ContentWrapper = animated(styled.div`
  position: relative;
  bottom: 100px;
`);

const Name = styled.h1`
  font-size: 90px;

  @media (max-width: 1000px) {
    font-size: 80px;
  }
  background-clip: text;
  -webkit-background-clip: text;
  margin: 0;
`;

const Description = styled.div`
  font-size: 90px;
  @media (max-width: 1000px) {
    font-size: 70px;
  }
  font-weight: 300;
  color: #d3d3d3;
`;

function Home(props) {
  // The scroll listener

  // Attach the scroll listener to the div

  return (
    <PageWrapper>
      <ContentWrapper>
        <Name>Silviu,</Name>
        <Description>Front-end Developer</Description>
      </ContentWrapper>

      <GoToNextPage isXAnimated to={"/about"}>
        See More
      </GoToNextPage>
    </PageWrapper>
  );
}

export default Home;
