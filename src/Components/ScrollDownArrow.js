import React from "react";
import styled from "styled-components/macro";

const ArrowStyle = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    opacity:0;
    filter: blur(1em);
    transition: all 1.5s;
  .arrow {

    opacity: 0;
position: absolute ;
    top: 88%;

    transform: translate3d(-50%,-50%,0);
    transform-origin: 50% 50%;
    margin-right: 32px;
}
  }

  .arrow-first {
    animation: arrow-movement 2s ease-in-out infinite;
  }
  .arrow-second {
    animation: arrow-movement 2s 1s ease-in-out infinite;
  }

  .arrow:before,
  .arrow:after {
    background: #fff;
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
  }

  .arrow:before {
    transform: rotate(45deg) translateX(-23%);
    transform-origin: top left;
  }

  .arrow:after {
    transform: rotate(-45deg) translateX(23%);
    transform-origin: top right;
  }

  @keyframes arrow-movement {
    0% {
      opacity: 0;
      top: 84%;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ScrollDownArrow = (props) => {
  return (
    <ArrowStyle className={props.className} id={props.id}>
      <div class="arrow arrow-first"></div>
      <div class="arrow arrow-second"></div>
    </ArrowStyle>
  );
};

export default ScrollDownArrow;
