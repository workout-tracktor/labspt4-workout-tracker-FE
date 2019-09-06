import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    //FONTS
    //ANIMATIONS
    //STYLE
    * {box-sizing: border-box}
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
        /* re-enabling active pseudo classes (By default Mobile Safari disables CSS active pseudo styles on web pages) */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    body {
        height: 100%;
        width: 100%;
        background: linear-gradient(#394366, #161A29);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle