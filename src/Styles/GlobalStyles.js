import { createGlobalStyle } from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

// Modern Normalize CSS
import "./ModernNormalize.css";

// Font installation method #1:
import "../Fonts/sofiapro-light-webfont.woff";
import "../Fonts/sofiapro-light-webfont.woff2";

const GlobalStyle = createGlobalStyle`

// For font installation method #1:
@font-face {
    font-family: 'Sofia Pro';
    src: url('sofiapro-light-webfont.woff2') format('woff2'),
         url('sofiapro-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

// Font installation method #2 (no need to define @font-face):
@import url("https://use.typekit.net/ihz1chw.css");


*{
    box-sizing:border-box;

}
html{
    font-size:100%;
}

body{
    font-size:16px;	
    font-family: "acumin-pro", sans-serif;
    font-weight: 400;
    font-style: normal;

    overflow-x: hidden;
}
body.menu-expanded{
    overflow:hidden;
}

/**********
 * FONTS
 ********/

h1,h2,h3,h4,h5,p,li,span,ul{
    margin:0;

}

 h1{
    font-family: 'Sofia Pro', sans-serif;
 }

 a{
    text-decoration:none;
    color:inherit;

 }

p,li{
    font-size: 16px;
}

`;
export default GlobalStyle;
