import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const ButtonStyled = styled.div`
  display: block;
  @media ${GlobalVariables.device.laptop} {
    display: inline-block;
  }
  margin-top: 1rem;

  display: inline-block;
  // styles for a basic minimal rounded corner button
  background: transparent;

  padding: 0.9rem 2rem;
  font-size: 0.8rem;
  font-family: ${GlobalVariables.fonts.primary};

  outline: none;
  border: 1px solid black;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 100vw;
  transition: all 0.15s;
  color: black;
  &:hover {
  }

  cursor: pointer;
  a {
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled className="button" type={props.type} onClick={props.onClick}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </ButtonStyled>
  );
};

export default Button;
