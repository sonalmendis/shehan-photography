import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const FooterStyled = styled.div`
  background: black;
  font-family: ${GlobalVariables.fonts.font1};
  height: 50px;
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  font-size: 0.8em;
`;

const Footer = (props) => {
  return <FooterStyled>©COPYRIGHT SHEHAN.K PHOTOGRAPHY</FooterStyled>;
};

export default Footer;
