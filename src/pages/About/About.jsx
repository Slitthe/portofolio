import React from "react";
import GoToNextPage from "../../components/GoToNextPage/GoToNextPage.jsx";
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
  color: var(--text-main-color);
`;
function About() {
  return (
    <Wrapper>
      <GoToNextPage isTop to={"/"}>
        Home
      </GoToNextPage>

      <Content>
        <p>
          <Highlight>JavaScript</Highlight> developer with 5+ years of
          professional experience, mainly using front-end technologies such as{" "}
          <Highlight>React</Highlight>, <Highlight>Redux</Highlight>,{" "}
          <Highlight>TypeScript</Highlight>, <Highlight>Tailwind</Highlight>,
          and many others. I pride myself in building interactive, responsive,
          and performant web applications.
        </p>
        <p>
          Although my main area of expertise is in front-end, I also have an
          interest in full-stack applications, using auxiliary stack and tools
          such as <Highlight>Node.js</Highlight> or{" "}
          <Highlight>Wordpress</Highlight>
        </p>
        <p>
          I get great pleasure from building uniform and unified user
          experience, and, as such I appreciate collaborating with people who
          share similar values as these ones.
        </p>

        <p>
          Worked in a variety of collaboration styles and team dynamics
          (on-site, remote, distributed, employed, freelancing, contracting),
          and as such I consider myself pretty adaptable in this regard.
        </p>
      </Content>

      <GoToNextPage isXAnimated to={"/projects"}>
        Projects
      </GoToNextPage>
    </Wrapper>
  );
}

export default About;
