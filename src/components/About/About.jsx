import React from "react";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useSprings,
} from "react-spring";
import ContactMenu from "../ContactMenu.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 20px;
  overflow: auto;
  min-height: 100%;
`;

const Content = styled.div`
  max-width: 600px;
  padding-top: 100px;
  margin-bottom: 100px;
`;

const Highlight = styled.span`
  color: red;
`;
function About(props) {
  return (
    <Wrapper>
      <GoToNextPage isTop to={"/"}>
        Home
      </GoToNextPage>

      <Content>
        <p>
          A <Highlight>Front-end developer</Highlight> is a master of crafting
          beautiful, intuitive, and user-friendly digital interfaces. By
          leveraging a robust toolkit of coding languages such as{" "}
          <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and
          <Highlight>JavaScript</Highlight>, a front-end developer ensures that
          the appearance and interactive aspects of a website or application are
          engaging and accessible across a multitude of platforms and devices.
        </p>
        <p>
          With an eye for design and a knack for problem-solving, they play a
          critical role in building digital experiences that not only look good
          but function seamlessly. Their ability to bridge the gap between
          graphical design and technical implementation makes them invaluable
          assets in the ever-evolving field of web development.
        </p>
        <p>
          Their work is an art of translating design mockups into interactive
          digital landscapes that guide users smoothly, creating delightful
          digital experiences that drive engagement and satisfaction.
        </p>
      </Content>

      <GoToNextPage isXAnimated to={"/projects"}>
        Projects
      </GoToNextPage>
    </Wrapper>
  );
}

export default About;
