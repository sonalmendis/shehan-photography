import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const FullWidthSmallTitleBlackBg1Styled = styled.div`
  background: black;
  position: relative;
  color: white;

  h3 {
    font-weight: 300;
    letter-spacing: 3px;
    font-size: 1em;
    text-align: center;
    margin-top: 1em;
    text-transform: uppercase;
  }
  .image-container {
    position: relative;

    @media ${GlobalVariables.device.landscape} {
      margin-bottom: 7em;
    }
    &.desktop-right {
      @media ${GlobalVariables.device.landscape} {
        img {
          margin-left: auto;
        }
      }
    }
  }

  .full-width-image-section2 {
    img {
      width: 100%;
    }
    .image-container {
      margin-bottom: 3em;
      &:last-of-type {
        margin-bottom: 0;
      }
      @media ${GlobalVariables.device.landscape} {
        margin-bottom: 8em;
      }
    }
  }
`;

const FullWidthSmallTitleBlackBg1 = (props) => {
  return (
    <FullWidthSmallTitleBlackBg1Styled className="full-width-image-section2 vertical-padding-normal">
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </FullWidthSmallTitleBlackBg1Styled>
  );
};

export default FullWidthSmallTitleBlackBg1;
