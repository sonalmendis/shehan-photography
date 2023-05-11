import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as GlobalVariables from "../Styles/GlobalVariables";

const FooterStyled = styled.div`
  background: black;
  height:50px
  width:100%;
  color:white;
  text-align:center;
`;

const Footer = (props) => {
  return <FooterStyled>copyright</FooterStyled>;
};

export default Footer;
