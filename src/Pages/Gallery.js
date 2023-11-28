import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components/macro";
import ContactForm from "../Components/ContactForm";
import * as GlobalVariables from "../Styles/GlobalVariables";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import ScrollDownArrow from "../Components/ScrollDownArrow";
import { Parallax } from "react-scroll-parallax"; // https://github.com/jscottsmith/react-scroll-parallax
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//Components
import OpeningSection from "../Components/OpeningSection";
import Button from "../Components/Button";
//IMAGES

import coupleSunsetDesktop from "../Images/bitmaps/sunset-beach-couple-desktop.jpg";
import guysWalking from "../Images/bitmaps/guys-walking.jpg";
import couplePort4 from "../Images/bitmaps/couple-portrait4.jpg";
import coupleHandHolding1 from "../Images/bitmaps/couple-hand-holding1.jpg";
import kandyanPortraitShot from "../Images/bitmaps/kandyan-portrait-shot2.jpg";
import bwCoupleDesktop from "../Images/bitmaps/bw-photo1-desktop.jpg";

import coupleWalkFire from "../Images/bitmaps/couple-walk-fire.png";
import coupleShotLandscape1 from "../Images/bitmaps/couple-shot-landscape1.jpg";
import brideLookingUp from "../Images/bitmaps/bride-looking-up.jpg";
import coupleNightShot from "../Images/bitmaps/couple-night-shot-landscape.png";
import coupleShotLandscape2 from "../Images/bitmaps/couple-shot-landscape2.png";
import coupleShotLandscape3 from "../Images/bitmaps/couple-shot-landscape3.png";
import coupleLightingLamp from "../Images/bitmaps/lighting-lamp.jpg";
import coupleinrain from "../Images/bitmaps/couple-in-rain.png";
import kidsplaying from "../Images/bitmaps/kids-playing.png";
import couplePort5 from "../Images/bitmaps/couple-portrait5.png";
import couplePort6 from "../Images/bitmaps/couple-portrait6.jpg";
import couplePort7 from "../Images/bitmaps/couple-portrait7.jpg";
import couplePort8 from "../Images/bitmaps/couple-portrait8.jpg";
import coupleport9 from "../Images/bitmaps/couple-portrait9.png";
import guyplayinguitar from "../Images/bitmaps/guy-playing-guitar.png";
import groupshot from "../Images/bitmaps/group-shot.png";

const images = [
  coupleport9,
  guyplayinguitar,
  groupshot,
  coupleWalkFire,
  coupleShotLandscape1,
  brideLookingUp,
  coupleLightingLamp,
  coupleNightShot,
  coupleShotLandscape2,
  coupleShotLandscape3,
  couplePort4,

  coupleNightShot,
  coupleinrain,
  kidsplaying,
  couplePort5,
  couplePort6,
  couplePort7,
  couplePort8,
  coupleSunsetDesktop,
  guysWalking,

  coupleHandHolding1,
  kandyanPortraitShot,
  bwCoupleDesktop,
];
const testImage =
  "https://strapi-images.sgp1.digitaloceanspaces.com/0802e7ab884c2c44ccc6ac231bd01a53.jpg";

const GalleryWrapper = styled.div`
  background: black;

  .intro-section {
    img {
      width: 100%;
    }
  }

  .gallery-image {
    border-radius: 1em;
  }

  .gallery-navbutton-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    button {
      margin-right: 1em;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Gallery = () => {
  const isDesktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  }); // Use as required, a must for detecting responsivity, may be present in other components
  useEffect(() => {
    const hiddenElementsRef = document.querySelectorAll(".hidden");

    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is intersecting the viewport, show it
          if (entry.target.closest(".hidden-parent")) {
            // If the element has a parent with the class "hidden-parent", show the parent element
            /* The .hidden-parent class is an invisible div that acts as an offset marker so that 
              the element doesn't appear until it's scrolled into view + the offset */
            entry.target.closest(".hidden-parent").classList.add("show");
          } else {
            // Otherwise, show the element itself
            entry.target.classList.add("show");
          }

          // Stop observing the element once its been shown
          hiddenElementsObserver.unobserve(entry.target);
        } else {
          // If the element is not intersecting the viewport, make sure it doesn't have the "show" class (note this should be defualt but this is just a precaution)
          entry.target.classList.remove("show");
        }
      });
    });
    const innerContainer = document.getElementById(
      "opening-section-inner-container"
    );
    const scrollArrows = document.getElementById("hidden-arrow");
    console.log(scrollArrows);
    console.log(innerContainer);
    innerContainer.addEventListener("transitionend", (event) => {
      if (event.propertyName === "margin-bottom") {
        console.log("Margin transition finished!");
        scrollArrows.classList.add("show");
      }
    });

    // innerContainer.addEventListener("webkitAnimationEnd", () => {
    //   console.log("Animation finished!");
    // });

    // innerContainer.onanimationend = () => {
    //   console.log("Animation ended");
    // };

    // Observe all hidden elements
    hiddenElementsRef.forEach((element) => {
      hiddenElementsObserver.observe(element);
    });

    return () => {
      hiddenElementsObserver.disconnect();
    };
  }, []);

  return (
    <GalleryWrapper>
      <OpeningSection height="75vh">
        <div className="top-opening-section">
          {/* <div className="black-overlay"></div> */}

          <div
            id="opening-section-inner-container"
            className="outer-grid tablet-inner-grid hidden inner-container"
          >
            <div className="text-container">
              <h1>Gallery</h1>

              <div className="divider"></div>
            </div>
          </div>
        </div>
      </OpeningSection>
      {/* <div className="gallery-navbutton-container vertical-padding-normal">
        <Button>Weddings</Button>
        <Button>Portraits</Button>
      </div> */}

      <div className="outer-grid hidden">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1em">
            {images.map((image, i) => (
              <img
                class="gallery-image "
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
