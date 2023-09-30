import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const Button = styled(NavLink)`
  user-select: none;
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

  &:hover,
  &.active {
    background: ${(props) => props.color};
    color: #050801;
    box-shadow:
      0 0 5px ${(props) => props.color},
      0 0 25px ${(props) => props.color},
      0 0 50px ${(props) => props.color},
      0 0 200px ${(props) => props.color};
  }

  @media (max-width: 1100px) {
    margin: 0;
    text-align: center;
    letter-spacing: 0;
    padding-left: 0;
    padding-right: 0;

    z-index: 1100;
  }
`;

function NeonButton({ children, color, isActive, to }) {
  const location = useLocation();
  return (
    <Button
      to={to}
      color={color}
      $isActive={isActive}
      onClick={(e) => {
        if (location.pathname === to) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </Button>
  );
}

export default NeonButton;
