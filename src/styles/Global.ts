import { createGlobalStyle } from "styled-components";

import backgroundImage from "../assets/background.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }
  
  body {
    background: #f0f0f5 url(${backgroundImage}) no-repeat 70% top; //70% pra direita e alinhar ao topo
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', sans-serif
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
