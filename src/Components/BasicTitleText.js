import React from "react";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";
const BasicTitleTextStyled = styled.div`
  .title-container {
    text-align: center;
    h2 {
      &:after {
        content: "";
        margin-top: 0.8em;
        display: block;
        width: 0.7em;
        height: 2px;
        background: white;
        margin-left: auto;
        margin-right: auto;

        @media ${GlobalVariables.device.landscape} {
          margin-top: 0.5em;
        }
      }
    }
    @media ${GlobalVariables.device.landscape} {
      h2,
      p {
        text-align: center;
      }
    }
  }
  button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
  &.welcome-text {
    p {
      @media ${GlobalVariables.device.landscape} {
        width: 75%;
        margin: auto;
      }
    }
  }
`;

const BasicTitleText = (props) => {
  return (
    <BasicTitleTextStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BasicTitleText component and put your own text */
      }
    </BasicTitleTextStyled>
  );
};

export default BasicTitleText;
