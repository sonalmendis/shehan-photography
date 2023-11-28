import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const PhotoWithSmallTitleStyled = styled.div`
  margin-bottom: 3em;
  border-radius: 1em;
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    width: 100%;
    border-radius: 2em;
  }
`;

const PhotoWithSmallTitle = (props) => {
  return (
    <PhotoWithSmallTitleStyled>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </PhotoWithSmallTitleStyled>
  );
};

export default PhotoWithSmallTitle;
