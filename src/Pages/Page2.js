import React from "react";
import styled from "styled-components/macro";

//IMAGES
import background from "../Images/background.jpg";

//Components
import Button from "../Components/Button";

const HomeWrapper = styled.div`
  background: #e6e6e6;
`;

const OpeningSectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat top center fixed;
  background-size: cover;

  .text-container {
    background: black;
    color: white;
    padding: 2rem;
    border-radius: 4px;
  }
`;
const Home = () => {
  return (
    <HomeWrapper>
      <OpeningSectionWrapper>
        <div className="text-container">
          <h1>Page 2</h1>
          <p>
            This is a barebones React template (made with your folder structure
            etc.)
          </p>
          <Button href={"/"}>Go to Home</Button>
        </div>
      </OpeningSectionWrapper>

      <div style={{ height: "100vh" }}>
        <p>
          This is some dummy copy. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus in risus at libero molestie fringilla id id
          mauris. Ut eget velit euismod, faucibus mi ac, tristique sapien.
          Aliquam vel bibendum nulla. Praesent non turpis tellus. Vivamus
          ultricies commodo leo quis venenatis. Duis vel libero in leo maximus
          consequat.
        </p>
        <p>
          Donec accumsan velit ac quam commodo, nec dictum tellus lobortis.
          Morbi eu
        </p>
      </div>
    </HomeWrapper>
  );
};

export default Home;
