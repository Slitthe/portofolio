import React from "react";
import styled, { css } from "styled-components";

const Button = styled.a`
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  color: ${(props) => props.color};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  width: 100%;
  margin: 40px 0;
  font-weight: bold;

  ${({ $isActive, color }) =>
    $isActive &&
    css`
      background: ${color};
      color: #a1a1a1;
      box-shadow:
        0 0 5px ${color},
        0 0 25px ${color},
        0 0 50px ${color},
        0 0 200px ${color};
    `}
  &:hover {
    background: ${(props) => props.color};
    color: #050801;
    box-shadow:
      0 0 5px ${(props) => props.color},
      0 0 25px ${(props) => props.color},
      0 0 50px ${(props) => props.color},
      0 0 200px ${(props) => props.color};
  }
`;

function NeonButton({ children, color, isActive }) {
  return (
    <Button color={color} $isActive={isActive}>
      {children}
    </Button>
  );
}

export default NeonButton;
