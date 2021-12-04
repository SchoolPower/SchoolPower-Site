import { css } from "styled-components";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@splidejs/splide/dist/css/splide.min.css";

import "./theme.css";

export const ToolBarHeight = "64px";

export const unSelectable = css`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;

export const cleanScrollBar = css`
  scrollbar-color: #b2ebf2 transparent;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    min-height: 40px;
    background: #b2ebf2;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #81b9bf;
  }
`;
