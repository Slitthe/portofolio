import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import React from "react";

const GoToNextPage = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`;

export default function ({ children, ...rest }) {
  return (
    <GoToNextPage {...rest}>
      <div>{children}</div>
      <div>
        <FiChevronDown />
      </div>
    </GoToNextPage>
  );
}
