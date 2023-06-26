import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import * as GlobalVariables from "../Styles/GlobalVariables";

const ButtonStyled = styled.div`
  // styles for a basic minimal rounded corner button
  background: transparent;
  border-radius: 0.25em;
  padding: 1em 2em;
  font-size: 1em;
  font-family: ${GlobalVariables.fonts.primary};
  outline: none;
  border: 1px solid white;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <Link to={props.href}>
      <ButtonStyled type={props.type}>
        {
          props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
        }
      </ButtonStyled>
    </Link>
  );
};

export default Button;
