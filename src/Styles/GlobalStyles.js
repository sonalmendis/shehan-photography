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
 * GRIDS
 ********/

.outer-grid{
    width:100%;
    max-width:500px;
    margin-left:auto;
    margin-right:auto;
    padding-left:1.25rem;
    padding-right:1.25rem;
}

.inner-grid{

}
.inner-grid2{
    
}

// Vertical padding is my 2023 way of doing margin. I'm using padding instead of margin because it's easier to control the spacing between elements. We can also use display:grid instead of flexbox for inside elements

// Adding the "no-top" class fixes the issue of having two divs that are seperate sections but the same background colour. Without the "no-top" class, the top padding of the second div will be the same colour as the background, which makes it look even bigger than needed. If the second div has a different background color however then you don't need the "no-top" class as it will "look" spaced out enough.

.vertical-padding-small{
    padding-top: 20px;
    padding-bottom: 20px;
    &.no-top{
        padding-top:0;
    }   
}
.vertical-padding-normal{
    padding-top: 40px;
    padding-bottom: 40px;
    &.no-top{
        padding-top:0;
    }
}
.vertical-padding-large{
    padding-top: 100px;
    padding-bottom: 100px;
    &.no-top{
        padding-top:0;
    }
}

@media ${GlobalVariables.device.tablet} {
    .outer-grid{
        width: 96%;
        max-width: 768px;
    
    }


}

@media ${GlobalVariables.device.laptop} {
    .outer-grid{
        width: 96%;
        max-width:unset;
        margin-left:auto;
        margin-right:auto;
        padding-left:0;
        padding-right:0;
    }
    .desktop-inner-grid{
        width: 54vw;
        max-width: 760px;
    }

}

/**********
 * FONTS
 ********/

h1,h2,h3,h4,h5,p,li,span,ul{
    margin:0;

}

 h1{
    font-family: 'Sofia Pro', sans-serif;
    margin-bottom: 0.6em;
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
