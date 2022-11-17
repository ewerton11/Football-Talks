import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section > main > div > div > div {
  min-width: 100% !important;
  min-height: 100% !important;
  /* display: flex; */
}

`
export default GlobalStyle
