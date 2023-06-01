import React from "react";
import styled from "styled-components/macro";
import ContactForm from "../Components/ContactForm";

import ScrollDownArrow from "../Components/ScrollDownArrow";

//IMAGES
import background from "../Images/background.jpg";
import mockup from "../Images/mockup.png";

import dummyImage from "../Images/dummy-image-small.jpg";
import dummyImageLarge from "../Images/dummy-image-large.jpg";

//Components
import Button from "../Components/Button";

const HomeWrapper = styled.div`
  background: #e6e6e6;

  .intro-section {
    img {
      width: 100%;
    }
  }
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
        <ScrollDownArrow></ScrollDownArrow>
        <div className="outer-grid desktop-inner-grid">
          <div className="text-container">
            <h1>Home Page</h1>
            <p>
              This is a barebones React template (made with your folder
              structure etc.)
            </p>
            <Button href={"/Page2"}>Go to Page 2</Button>
          </div>
        </div>
      </OpeningSectionWrapper>

      <div className="outer-grid vertical-padding-normal desktop-inner-grid intro-section">
        <h1>Welcome</h1>
        <p>
          This is some dummy copy. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus in risus at libero molestie fringilla id id
          mauris.
        </p>

        {/* This is an example of the best way to load responsive images with the <picture> tag.
        Test it out by changing the browser width, make sure to reload without cache though*/}
        <picture>
          <source srcSet={`${dummyImage} 767w, ${dummyImageLarge} 1095w`} />
          <img src={dummyImage} alt="Shrine" />
        </picture>
        <img src={mockup} alt="Mockup" />
      </div>
      <div className="outer-grid vertical-padding-normal no-top desktop-inner-grid">
        <ContactForm />
      </div>
    </HomeWrapper>
  );
};

export default Home;
