import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const DividerStyled = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.background && `background: ${props.background};`}
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
  background-position: center;
  background-attachment: fixed;
  height: 25em;
  ${(props) => props.height && `height: ${props.height};`}
  color: white;

  @media ${GlobalVariables.device.landscape} {
    background-image: url(${(props) => props.backgroundImages.desktopx75});
  }

  @media ${GlobalVariables.device.laptopL} {
    background-image: url(${(props) => props.backgroundImages.desktop});
  }
`;

const Divider = (props) => {
  return (
    <DividerStyled
      className={props.className}
      backgroundImages={props.backgroundImages}
      background={props.background}
      height={props.height}
      style={props.style}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the Divider component and put your own text */
      }
    </DividerStyled>
  );
};

export default Divider;
