import { css } from "@emotion/react";

import Reset from "./reset";

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  #root {
    width: 375px;
    min-height: 100dvh;
    background-color: #fff;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
      max-width: var(--max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
