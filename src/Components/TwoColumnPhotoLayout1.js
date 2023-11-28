import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const TwoColumnPhotoLayout1Styled = styled.div`
  background: ${(props) => (props.darktheme ? "black" : "white")};
  position: relative;
  color: ${(props) => (props.darktheme ? "white" : "black")};
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
  h3 {
    font-weight: 300;
    letter-spacing: 3px;
    font-size: 1em;
    text-align: center;
    margin-top: 1em;
    text-transform: uppercase;
  }
  h4 {
    text-align: center;
    margin-top: 1em;
  }

  @media ${GlobalVariables.device.landscape} {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 3em;
      grid-row-gap: 0px;
    }
  }
`;

const TwoColumnPhotoLayout1 = (props) => {
  return (
    <TwoColumnPhotoLayout1Styled
      darktheme={props.darktheme}
      className={props.className}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </TwoColumnPhotoLayout1Styled>
  );
};

export default TwoColumnPhotoLayout1;
