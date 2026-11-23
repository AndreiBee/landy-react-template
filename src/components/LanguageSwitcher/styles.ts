import styled from "styled-components";

export const SwitchGroup = styled("div")<{ $gap: string; $edge: string }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap};
  padding: 0 ${({ $edge }) => $edge};
`;

export const SwitchButton = styled("button")`
  display: inline-flex;
  padding: 0;
  border: 0;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.6;
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;

  &[aria-pressed="true"] {
    opacity: 1;
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid rgb(255, 130, 92);
    outline-offset: 2px;
  }
`;
