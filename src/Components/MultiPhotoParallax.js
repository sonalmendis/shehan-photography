import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const MultiPhotoParallaxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div:nth-child(2) {
    position: relative;
    z-index: 3;
  }
  > div:nth-child(odd) {
    img {
      filter: blur(0.2em);
      opacity: 0.75;
      @media ${GlobalVariables.device.landscape} {
        filter: blur(0);
        opacity: 1;
      }
    }
  }
  img {
    width: 65vw;
    border-radius: 1000em;
    position: relative;
    &.first-photo {
      margin-right: -4em;
      @media ${GlobalVariables.device.landscape} {
        margin: 0;
      }
    }
    &.third-photo {
      margin-left: -4em;
      @media ${GlobalVariables.device.landscape} {
        margin: 0;
      }
    }

    @media ${GlobalVariables.device.landscape} {
      width: 23vw;
    }
  }

  .middle-photo {
    z-index: 3;
    position: relative;
    @media ${GlobalVariables.device.landscape} {
      margin-left: 2em;
      margin-right: 2em;
    }
  }
`;

const MultiPhotoParallax = (props) => {
  return (
    <MultiPhotoParallaxStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the MultiPhotoParallax component and put your own text */
      }
    </MultiPhotoParallaxStyled>
  );
};

export default MultiPhotoParallax;
