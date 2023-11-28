import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const ButtonStyled = styled.button`
  display: block;

  ${(props) => props.inline && `display: inline-block;`}

  // styles for a basic minimal rounded corner button
  background: rgba(255, 255, 255, 0.1);

  padding: 1.4em 2em;
  ${(props) => props.size === "small" && `  padding: 1.2em 1.5em;`}
  font-size: 0.8rem;
  font-family: ${GlobalVariables.fonts.font1};
  font-weight: 700;
  outline: none;
  border: 1px solid white;
  // low opacity white background:
  backdrop-filter: blur(0.5em);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 0.8em;
  transition: all 0.15s;
  color: white;

  @media ${GlobalVariables.device.desktopL} {
    font-size: 0.8vw;
  }

  ${(props) =>
    (props.type === "button2" || props.type === "button3") &&
    `   
    outline: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-size: 150% 150%;
    background-position: 0% 0%;
    animation: gradient 4s ease infinite;
    cursor: pointer;
    position: relative;
    z-index: 0;

      &:before {
        content: "";

      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 150%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: gradient 4s ease infinite;
      opacity: 0;
      transition: opacity 0.2s linear;
      border-radius: 10px;
      // border: 1px solid rgba(255, 255, 255, 0.2);
      }

      &:hover:before {
        opacity: 1;
      }

      &:after {
        z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;

      background-size: 150% 150%;
      background-position: 0% 0%;
      animation: gradient 4s ease infinite;
      left: 0;
      top: 0;
      border-radius: 10px;
      }
 
    `}

  ${(props) =>
    props.type === "button2" &&
    `
  
 

    &:before {
      background-image: linear-gradient(
      90deg,
      rgba(14, 145, 175, 1) 0%,
      rgba(93, 10, 158, 1) 100%
    );
    }
    &:after {
      background-image: linear-gradient(
      90deg,
      rgba(14, 145, 175, 1) 0%,
      rgba(93, 10, 158, 1) 100%
    );
    }
    `}


${(props) =>
    props.type === "button3" &&
    `



    &:before {
      background-image: linear-gradient(
      90deg,
      rgba(247, 123, 30, 1) 0%,
      rgba(216, 18, 18, 1) 100%
    );
    }
    &:after {
      background-image: linear-gradient(
      90deg,
      rgba(247, 123, 30, 1) 0%,
      rgba(216, 18, 18, 1) 100%
    );
    }
    `}

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  /* @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  } */

  cursor: pointer;
  a {
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled
      className={`button ${props.className}`}
      type={props.type}
      inline={props.inline}
      onClick={props.onClick}
      style={props.style}
      size={props.size}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </ButtonStyled>
  );
};

export default Button;
