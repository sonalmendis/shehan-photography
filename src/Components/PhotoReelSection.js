import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const PhotoReelSectionStyled = styled.div`
  // Here are some examples of props being used
  /*

order: ${(props) => (props.side === "left" ? "1" : "2")};

background: url("${(props) => props.bg}");

${(props) => props.type === "outline" && `background: none;`}

*/
  height: 120vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 0px;
  .col {
    overflow: hidden;
  }
  .image-container {
    overflow: hidden;
    margin-bottom: 2em;
    border-radius: 2em;
    height: 24em;
  }
  .col1 .image-container {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .col2 .image-container {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  img {
    width: 159%;
    height: 100%;
    margin-left: -25%;
    object-fit: cover;
  }
  .title-container {
    margin-bottom: 2em;
  }

  @media ${GlobalVariables.device.landscape} {
    img {
      width: 100%;
      height: 100%;
      margin-left: -0%;
    }
    .col1 .image-container {
      border-bottom-left-radius: 2em;
      border-top-left-radius: 2em;
    }

    .col2 .image-container {
      border-bottom-right-radius: 2em;
      border-top-right-radius: 2em;
    }
  }
`;

const PhotoReelSection = (props) => {
  return (
    <PhotoReelSectionStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the PhotoReelSection component and put your own text */
      }
    </PhotoReelSectionStyled>
  );
};

export default PhotoReelSection;
