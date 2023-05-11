import React from "react";
import styled from "styled-components/macro";
import GlobalStyles from "../Styles/GlobalStyles";

const ButtonStyled = styled.a`
  // styles for a basic minimal rounded corner button
  background: transparent;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-family: "Sofia Pro"; // change this to your liking
  outline: none;
  border: 1px solid white;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <ButtonStyled type={props.type} href={props.href}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </ButtonStyled>
  );
};

export default Button;
