import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import { useSpring, animated, useSpringRef } from "react-spring";
import { useScroll } from "react-use-gesture";

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
  background-clip: text;
  -webkit-background-clip: text;
  margin: 0;
`;

const Description = styled.div`
  font-size: 90px;
  font-weight: 300;
  color: #d3d3d3;
`;

const AnimatedLink = animated(GoToNextPage);

const useMediaQuery = (minWidth) => {
  const [matches, setMatches] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `screen and (min-width: ${minWidth}px)`,
    );
    const listener = (ev) => {
      setMatches(ev.matches);
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return matches;
};

function About(props) {
  // The scroll listener

  // Attach the scroll listener to the div

  const matches = useMediaQuery(1400);
  console.log({ matches });
  const [{ x }, api] = useSpring(() => ({
    x: matches ? -150 : 0,
    config: { mass: 5, tension: 850, friction: 40 },
  }));

  const [{ bottom }] = useSpring(
    () => ({
      from: { bottom: 8 },
      to: {
        bottom: 16,
      },
      loop: {
        reverse: true,
      },
    }),
    [],
  );

  useEffect(() => {
    api.start({
      x: matches ? -150 : 0,
    });
  }, [matches]);

  return (
    <PageWrapper>
      <ContentWrapper style={{ x }}>
        <Name>Silviu,</Name>
        <Description>Front-end Developer</Description>
      </ContentWrapper>

      <AnimatedLink style={{ bottom }} to={"/projects"}>
        Projects
      </AnimatedLink>
    </PageWrapper>
  );
}

export default About;
