import React from "react";
import GoToNextPage from "../GoToNextPage/GoToNextPage.jsx";
import { animated, useSpring } from "react-spring";

function About(props) {
  // const [{ bottom }] = useSpring(
  //   () => ({
  //     from: { bottom: 8 },
  //     to: {
  //       bottom: 16,
  //     },
  //     loop: {
  //       reverse: true,
  //     },
  //   }),
  //   [],
  // );

  return (
    <div>
      <GoToNextPage isTop to={"/"}>
        Home
      </GoToNextPage>
      <GoToNextPage isXAnimated to={"/projects"}>
        See More
      </GoToNextPage>
    </div>
  );
}

export default About;
