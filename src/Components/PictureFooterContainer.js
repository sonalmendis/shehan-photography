import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const PictureFooterContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.6em;
`;

const PictureFooterContainer = (props) => {
  return (
    <PictureFooterContainerStyled>
      {props.children}
    </PictureFooterContainerStyled>
  );
};

export default PictureFooterContainer;
