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

const Description = animated(styled.div`
  font-size: 90px;
  @media (max-width: 1000px) {
    font-size: 70px;
  }
  font-weight: 300;
  color: #d3d3d3;
`);

const titles = [
  "Front-end developer",
  "Full-stack developer",
  "While loop enjoyer",
];

function Home(props) {
  const titleIndexRef = useRef(0);
  const [title, setTitle] = useState(titles[titleIndexRef.current]);

  const [{ opacity }, api] = useSpring(() => ({
    opacity: 1,
    config: { mass: 0.5, tension: 850, friction: 40, duration: 600 },
    onRest: (e) => {
      if (e.value.opacity === 0) {
        setTitle(titles[titleIndexRef.current]);
        api({ opacity: 1 });
      } else {
      }
      console.log(e.value.opacity);
    },
  }));

  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (titleIndexRef.current === titles.length - 1) {
        titleIndexRef.current = 0;
      } else {
        titleIndexRef.current++;
      }

      api({ opacity: 0 });
      console.log(titleIndexRef.current);
      console.log(titles[titleIndexRef.current]);
    }, 5000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // The scroll listener

  // Attach the scroll listener to the div

  return (
    <PageWrapper>
      <ContentWrapper>
        <Name>Silviu,</Name>
        <Description style={{ opacity }}>{title}</Description>
      </ContentWrapper>

      <GoToNextPage isXAnimated to={"/about"}>
        See More
      </GoToNextPage>
    </PageWrapper>
  );
}

export default Home;
