import { createGlobalStyle } from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

// Modern Normalize CSS
import "./ModernNormalize.css";

// Font installation method #2 (method #1 is in the public index file):
import SofiaWoff from "../Fonts/sofiapro-light-webfont.woff";
import SofiaWoff2 from "../Fonts/sofiapro-light-webfont.woff2";

const GlobalStyle = createGlobalStyle`

/*
FONTS
IMPORTANT WARNING:
Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.   

THEREFORE IF FONTS ARE AVAILABLE ONLINE:
Whenever possible place fonts in the <head> of the public folder, this is by far the least complicated way

IF YOU CAN ONLY USE DOWNLOADED FONTS:
use @font-face to import them, see below for an example
*/

/* Font installed:
font-family: "acumin-pro", sans-serif;
font-weight: 400;
font-style: normal;
*/


// Font installation method #2 (not reccommended):
@font-face {
    font-family: 'Sofia Pro';
    src: url(${SofiaWoff}) format('woff2'),
         url(${SofiaWoff2}) format('woff');
    font-weight: normal;
    font-style: normal;

}


*{
    box-sizing:border-box;

}
html{
    font-size:100%;
}

body{
    font-size:16px;	
    font-family: ${GlobalVariables.fonts.font2};
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
        width: 72vw;
        margin-left:auto;
        margin-right:auto;
    }
    .desktop-inner-grid2{
        width: 54vw;
        margin-left:auto;
        margin-right:auto;
        /* max-width: 47.5em; // This is em because the upwards scale beyond "laptop" will mostly just be a <body> font size scale */
        // may not even need max-width here
    }

    .desktop-inner-grid3{
        width: 33vw;
        margin-left:auto;
        margin-right:auto;
        /* max-width: 47.5em; // This is em because the upwards scale beyond "laptop" will mostly just be a <body> font size scale */
        // may not even need max-width here
    }
}



// Vertical padding is my 2023 way of doing margin. I'm using padding instead of margin because it's easier to control the spacing between elements. We can also use display:grid instead of flexbox for inside elements

// Adding the "no-top" class fixes the issue of having two divs that are seperate sections but the same background colour. Without the "no-top" class, the top padding of the second div will be the same colour as the background, which makes it look even bigger than needed. If the second div has a different background color however then you don't need the "no-top" class as it will "look" spaced out enough.

// USE EMs FOR PADDING, NOT PX, this way the padding will scale with the <body> font size
// For most sizing you should use ems/%/vw, not px, use common sense e.g. font-size and margins should be em but border can be px

.vertical-padding-small{
    padding-top: 1.25em;
    padding-bottom: 1.25em;
    &.no-top{
        padding-top:0;
    }
    &.no-bottom{
        padding-bottom:0;
    }   
}
.vertical-padding-normal{
    padding-top: 2.5em;
    padding-bottom: 2.5em;
    &.no-top{
        padding-top:0;
    }
    &.no-bottom{
        padding-bottom:0;
    }   
}
.vertical-padding-large{
    padding-top: 6.25em;
    padding-bottom: 6.25em;
    &.no-top{
        padding-top:0;
    }
    &.no-bottom{
        padding-bottom:0;
    }   
}



/**********
 * FONTS
 ********/

h1,h2,h3,h4,h5,p,li,span,ul{
    margin:0;

}

 h1{
    font-family: ${GlobalVariables.fonts.font1};
    margin-bottom: 0.6em;
 }

 a{
    text-decoration:none;
    color:inherit;

 }

p,li,a{
    font-size: 1em;
}

`;
export default GlobalStyle;
