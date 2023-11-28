import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

import backgroundMobile from "../Images/bitmaps/wedding-bg-mobile.jpg";
import backgroundTablet from "../Images/bitmaps/wedding-bg-tablet.jpg";
import backgroundTabletx75 from "../Images/bitmaps/wedding-bg-tablet@0.75x.jpg";
import backgroundDesktop from "../Images/bitmaps/wedding-bg-desktop.jpg";
import backgroundDesktopx75 from "../Images/bitmaps/wedding-bg-desktop@0.75x.jpg";

const OpeningSectionStyled = styled.div`
  @keyframes glow {
    from {
      filter: blur(0.01em);
    }
    to {
      filter: blur(0.07em);
    }
  }
  .top-opening-section {
    height: 100vh;
    ${(props) => props.height && `height: ${props.height};`}
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) =>
      props.backgroundImages &&
      `url(${props.backgroundImages.mobile}) no-repeat top center;`};
    ${(props) =>
      props.backgroundImages &&
      `background-image: url("${props.backgroundImages.original}");`}

    ${(props) =>
      props.backgroundImages &&
      `
      background-image: -webkit-image-set(
        url(${props.backgroundImages.mobilex75}) 1x,
        url(${props.backgroundImages.mobile}) 2x
      );
  `}
    background-size: cover;

    @media ${GlobalVariables.device.tablet} {
      //FIX
      /* background-repeat: no-repeat;
      background-position: top center;
      background-image: url(${backgroundTablet});
      background-image: -webkit-image-set(
        url(${backgroundTabletx75}) 1x,
        url(${backgroundTablet}) 2x
      ); */
    }

    @media ${GlobalVariables.device.landscape} {
      ${(props) =>
        props.backgroundImages
          ? `background-image: url(${props.backgroundImages.desktopx75});`
          : ``}
    }

    @media ${GlobalVariables.device.laptopL} {
      ${(props) =>
        props.backgroundImages
          ? `background-image: url(${props.backgroundImages.desktop});`
          : ``}
    }
    // produce a props.page conditional function
    ${(props) =>
      props.page === "home" &&
      `

h1 {
      color: #e9b080;
      &#glow-title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        /* filter: blur(0.07em); */
        transition: filter 2.5s;
        animation: glow 2.5s ease-in-out infinite alternate;
      }
    }


    #opening-section-inner-container {
      margin-bottom: -15%;
      mix-blend-mode: color-dodge;
      transition: margin 3s ease-in-out, opacity 1s ease-in-out,
        filter 1.5s ease-in-out;
      opacity: 0;
      filter: blur(0.5em);

      &.show {
        margin-bottom: 40%;
        opacity: 1;
        filter: blur(0);

        @media ${GlobalVariables.device.landscape} {
          margin-bottom: 20%;
        }
      }
    }



`}

    #transparent-couple {
      width: 84%;
      position: absolute;
      bottom: 5%;
      left: 18%;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 2;

      @media ${GlobalVariables.device.tablet} {
        width: 68%;
      }

      @media ${GlobalVariables.device.landscape} {
        width: 25vw;
        left: 10vw;
      }
    }

    .text-container {
      color: white;
      border-radius: 4px;
      position: relative;
      text-align: center;
    }

    .black-overlay {
      background: rgba(0, 0, 0, 0.8);
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 0;
    }

    .logo {
      width: 15em;
      margin-bottom: 2em;

      @media ${GlobalVariables.device.landscape} {
        width: 23em;
      }
    }

    .mockup-container {
      position: absolute;
      bottom: -4em;

      @media ${GlobalVariables.device.landscape} {
        bottom: -13em;
      }

      img {
        width: 100%;
      }
    }

    .post-opening-section {
      text-align: center;

      @media ${GlobalVariables.device.landscape} {
        padding-top: 15em;
      }
    }
  }
`;

const OpeningSection = (props) => {
  return (
    <OpeningSectionStyled
      page={props.page}
      className={props.className}
      height={props.height}
      backgroundImages={props.backgroundImages}
    >
      {props.children}
    </OpeningSectionStyled>
  );
};

export default OpeningSection;
