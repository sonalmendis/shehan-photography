import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const FullWidthImageContainerStyled = styled.div`
  padding-bottom: 0;
  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    @media ${GlobalVariables.device.landscape} {
      height: 86vh;
    }
  }
  img {
    width: 100vw;
    display: block;
    @media ${GlobalVariables.device.landscape} {
      object-fit: cover;
      height: 100%;
    }
  }
  q {
    font-family: ${GlobalVariables.fonts.primaryFont};
    font-weight: bold;
    position: absolute;
    background: white;
    padding: 0.5em 1em;
    bottom: 20%;
    text-transform: capitalize;
    @media ${GlobalVariables.device.landscape} {
      font-size: 1.2em;
      bottom: 15%;
    }
  }
`;

const FullWidthImageContainer = (props) => {
  return (
    <FullWidthImageContainerStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </FullWidthImageContainerStyled>
  );
};

export default FullWidthImageContainer;
