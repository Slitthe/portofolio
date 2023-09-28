import styled from "styled-components";

export const Glass = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.175);
  border-radius: 16px;
  transition: background ease-in-out 0.4s;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;
