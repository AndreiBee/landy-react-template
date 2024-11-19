import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled("div")`
  display: ruby;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 20px;

  img {
    width: 140px; /* Adjust image size */
    height: auto;
    border-radius: 8px; /* Optional styling */
  }

  &:hover {
    opacity: 0.8; /* Visual feedback on hover */
  }
`;