import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const { color, font } = theme;

export const Styles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 96px; /* keep anchored sections clear of the sticky header */
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    margin: 0;
    font-family: ${font.sans};
    font-size: 17px;
    line-height: 1.65;
    color: ${color.text};
    background: ${color.surface};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    color: ${color.ink};
    font-weight: 750;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2.4rem, 5.2vw, 3.9rem);
    letter-spacing: -0.035em;
    line-height: 1.06;
  }

  h2 {
    font-size: clamp(1.85rem, 3.4vw, 2.7rem);
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin: 0;
  }

  a {
    color: ${color.brand};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${color.accentText};
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: ${color.accent};
    color: #fff;
  }

  :focus-visible {
    outline: 3px solid ${color.accent};
    outline-offset: 3px;
    border-radius: 6px;
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
