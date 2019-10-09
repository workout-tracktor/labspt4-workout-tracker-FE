import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    //FONTS
    //ANIMATIONS
    //STYLE
    * {box-sizing: border-box}
    html {
        font-size: 62.5%;
        background: linear-gradient(#394366, #161A29);
        background-attachment: fixed;  
        /* re-enabling active pseudo class (By default Mobile Safari disables CSS active pseudo styles on web pages) */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    body {
        margin: 0;
        background: linear-gradient(#394366, #161A29);
        background-attachment: fixed;  
         }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
