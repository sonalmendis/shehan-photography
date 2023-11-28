import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const numberOfSlides = 14;
const slideWidthDesktop = "20em";

const PhotoSliderStyled = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(-${slideWidthDesktop} * ${numberOfSlides / 2})
      );
    }
  }

  background: white;
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125); */

  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
  .slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(${slideWidthDesktop} * 14);
  }

  .slide {
    /* padding: 2em; */
    margin-right: 1em;
    height: 30em;
    width: ${slideWidthDesktop};
    overflow: hidden;

    img {
      border-radius: 1em;
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
`;

const PhotoSlider = (props) => {
  return (
    <PhotoSliderStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the PhotoSlider component and put your own text */
      }
    </PhotoSliderStyled>
  );
};

export default PhotoSlider;
