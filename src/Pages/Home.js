import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax"; // https://github.com/jscottsmith/react-scroll-parallax
import styled from "styled-components/macro";
import ContactForm from "../Components/ContactForm";
import ScrollDownArrow from "../Components/ScrollDownArrow";
import * as GlobalVariables from "../Styles/GlobalVariables";
//IMAGES
import couplePort3 from "../Images/bitmaps/couple-portrait3.jpg";
import transparentWeddingCouple from "../Images/bitmaps/wedding-couple-transparent.png";

import bwCoupleDesktop from "../Images/bitmaps/bw-photo1-desktop.jpg";
import bwCoupleMobile from "../Images/bitmaps/bw-photo1-mobile.jpg";
import bwCoupleMobilex75 from "../Images/bitmaps/bw-photo1-mobile@0.75x.jpg";

import coupleHandHolding1 from "../Images/bitmaps/couple-hand-holding1.jpg";
import couplePort4 from "../Images/bitmaps/couple-portrait4.jpg";
import kandyanPortraitShot from "../Images/bitmaps/kandyan-portrait-shot2.jpg";

import coupleSunsetDesktop from "../Images/bitmaps/sunset-beach-couple-desktop.jpg";
import coupleSunsetDesktopx75 from "../Images/bitmaps/sunset-beach-couple-desktop@0.75x.jpg";
import coupleSunsetMobile from "../Images/bitmaps/sunset-beach-couple-mobile.jpg";
import coupleSunsetMobilex75 from "../Images/bitmaps/sunset-beach-couple-mobile@0.75x.jpg";

import coupleHandHolding2 from "../Images/bitmaps/couple-hand-holding2.jpg";
import coupleHandHolding2x75 from "../Images/bitmaps/couple-hand-holding2@0.75x.jpg";
import guysWalking from "../Images/bitmaps/guys-walking.jpg";
import guysWalkinx75 from "../Images/bitmaps/guys-walking@0.75x.jpg";

import backgroundDesktop from "../Images/bitmaps/wedding-bg-desktop.jpg";
import backgroundDesktopx75 from "../Images/bitmaps/wedding-bg-desktop@0.75x.jpg";
import backgroundMobile from "../Images/bitmaps/wedding-bg-mobile.jpg";
import backgroundTabletx75 from "../Images/bitmaps/wedding-bg-tablet@0.75x.jpg";

import brideLookingUp from "../Images/bitmaps/bride-looking-up.jpg";
import coupleinrain from "../Images/bitmaps/couple-in-rain.png";
import coupleNightShot from "../Images/bitmaps/couple-night-shot-landscape.png";
import couplePort5 from "../Images/bitmaps/couple-portrait5.png";
import couplePort6 from "../Images/bitmaps/couple-portrait6.jpg";
import couplePort7 from "../Images/bitmaps/couple-portrait7.jpg";
import couplePort8 from "../Images/bitmaps/couple-portrait8.jpg";
import coupleport9 from "../Images/bitmaps/couple-portrait9.png";
import coupleShotLandscape1 from "../Images/bitmaps/couple-shot-landscape1.jpg";
import coupleShotLandscape2 from "../Images/bitmaps/couple-shot-landscape2.png";
import coupleShotLandscape3 from "../Images/bitmaps/couple-shot-landscape3.png";
import coupleWalkFire from "../Images/bitmaps/couple-walk-fire.png";
import kidsplaying from "../Images/bitmaps/kids-playing.png";
import coupleLightingLamp from "../Images/bitmaps/lighting-lamp.jpg";

//Components
import BasicTitleText from "../Components/BasicTitleText";
import Button from "../Components/Button";
import Divider1 from "../Components/Divider1";
import FullWidthImageContainer from "../Components/FullWidthImageSection";
import MultiPhotoParallax from "../Components/MultiPhotoParallax";
import OpeningSection from "../Components/OpeningSection";
import PhotoReelSection from "../Components/PhotoReelSection";
import PhotoSlider from "../Components/PhotoSlider";
import PhotoTiledLayout from "../Components/PhotoTiledLayout";
import PhotoWithSmallTitle from "../Components/PhotoWithSmallTitle1";
import TwoColumnPhotoLayout1 from "../Components/TwoColumnPhotoLayout1";

const testImage =
  "https://strapi-images.sgp1.digitaloceanspaces.com/0802e7ab884c2c44ccc6ac231bd01a53.jpg";

const HomeWrapper = styled.div`
  background: black;

  .intro-section {
    img {
      width: 100%;
    }
  }
`;

const Home = () => {
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
    <HomeWrapper>
      <OpeningSection
        page="home"
        backgroundImages={{
          original: backgroundDesktop,
          mobile: backgroundMobile,
          mobilex75: backgroundTabletx75,
          desktop: backgroundDesktop,
          desktopx75: backgroundDesktopx75,
        }}
      >
        <div className="top-opening-section">
          {/* <div className="black-overlay"></div> */}
          <picture>
            <source
              srcSet={`${transparentWeddingCouple} 1095w, ${transparentWeddingCouple} 821w,${transparentWeddingCouple} 548w`}
            />
            <img
              src={transparentWeddingCouple}
              id="transparent-couple"
              alt="Wedding couple dancing"
            />
          </picture>

          <div
            id="opening-section-inner-container"
            onAnimationEnd={() => console.log("finished")}
            className="outer-grid tablet-inner-grid hidden inner-container"
          >
            <div className="text-container">
              <h1>Unlock the magic of memories</h1>
              <h1 id="glow-title">Unlock the magic of memories</h1>
              <div className="divider"></div>
            </div>
          </div>
          <ScrollDownArrow id="hidden-arrow"></ScrollDownArrow>
        </div>
      </OpeningSection>
      <BasicTitleText className="outer-grid tablet-inner-grid desktop-inner-grid welcome-text vertical-padding-normal">
        <div className="title-container">
          <h2>Welcome to Shehan.k photography</h2>
          <p>
            Step into a world of love and laughter, captured through the lens of
            Shehan. Based amidst the breathtaking beauty of Sri Lanka, Shehan is
            your dedicated wedding photographer, committed to encapsulating the
            essence of your special day.
          </p>
        </div>
      </BasicTitleText>
      <MultiPhotoParallax className="vertical-padding-normal">
        <Parallax speed={25}>
          <img
            className="first-photo"
            src={coupleport9}
            alt="couple-portrait1"
          />
        </Parallax>
        <Parallax speed={15}>
          <img
            className="middle-photo"
            src={couplePort3}
            alt="couple-portrait1"
          />
        </Parallax>
        <Parallax speed={35}>
          <img
            className="third-photo"
            src={coupleinrain}
            alt="couple-portrait1"
          />
        </Parallax>
        {/* <img src={couplePort1} alt="couple-portrait1" />
        <img class="middle-photo" src={couplePort2} alt="couple-portrait1" />
        <img src={couplePort3} alt="couple-portrait1" /> */}
      </MultiPhotoParallax>
      <BasicTitleText className="outer-grid tablet-inner-grid desktop-inner-grid vertical-padding-small no-top">
        <div className="title-container outer-grid vertical-padding-normal no-top">
          <h3>Capturing moments, weaving memories</h3>
          <Button>
            <Link to="/gallery">view gallery</Link>
          </Button>
        </div>
      </BasicTitleText>
      <FullWidthImageContainer className="vertical-padding-large no-top">
        <div className="image-container">
          <picture>
            <source
              srcSet={`${bwCoupleMobile} 1050w, ${bwCoupleMobilex75} 788w`}
              media="(orientation: portrait)"
            />
            <source
              srcSet={`${bwCoupleDesktop} 2000w}`}
              media="(orientation: landscape)"
            />
            <img src={bwCoupleDesktop} alt="Girl looking out window" />
          </picture>
        </div>
      </FullWidthImageContainer>
      <div className="no-top outer-grid tablet-inner-grid vertical-padding-large desktop-vertical-padding-small desktop-inner-grid intro-section">
        <PhotoTiledLayout>
          <div className="left-column-desktop">
            <div className="image-container">
              <picture>
                <source srcSet={`${couplePort4} 767w, ${couplePort4} 1095w`} />
                <img src={couplePort4} alt="Image 1" />
              </picture>
            </div>

            <div className="image-container desktop-visible">
              <picture>
                <source
                  srcSet={`${coupleHandHolding1} 702w, ${coupleHandHolding1} 1002w`}
                />
                <img src={coupleHandHolding1} alt="Image 2" />
              </picture>
            </div>
          </div>
          <div className="image-container">
            <picture>
              <source srcSet={`${kandyanPortraitShot} 561w `} />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
          </div>
        </PhotoTiledLayout>
      </div>
      <Divider1
        backgroundImages={{
          original: coupleSunsetDesktop,
          mobile: coupleSunsetMobile,
          mobilex75: coupleSunsetMobilex75,
          desktop: coupleSunsetDesktop,
          desktopx75: coupleSunsetDesktopx75,
        }}
      ></Divider1>

      <PhotoReelSection className="desktop-inner-grid">
        {/* <Parallax
          translateY={[-100, 100]}
          // speed={285}
          rootMargin={{ top: 0, right: 100, bottom: 0, left: 100 }}
        >
          <div className="col col1">
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
          </div>
        </Parallax> */}

        <Parallax
          translateY={[-100, 250]}
          rootMargin={{ top: 0, right: 100, bottom: 1200, left: 100 }}
        >
          <div className="col col1">
            <div className="image-container">
              <picture>
                <source srcSet={`${coupleShotLandscape1} 561w`} />
                <img
                  src={coupleShotLandscape1}
                  alt="Couple walking with fire around them"
                />
              </picture>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet={`${coupleWalkFire} 561w`} />
                <img
                  src={coupleWalkFire}
                  alt="Couple walking with fire around them"
                />
              </picture>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet={`${brideLookingUp} 561w `} />
                <img src={brideLookingUp} alt="Image 3" />
              </picture>
            </div>
          </div>
        </Parallax>

        {/* 

        <Parallax
          speed={25}
          rootMargin={{ top: 0, right: 100, bottom: 0, left: 100 }}
        >
          <div className="col col2">
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
            <picture>
              <source
                srcSet={`${kandyanPortraitShot} 561w `}
              />
              <img src={kandyanPortraitShot} alt="Image 3" />
            </picture>
          </div>
        </Parallax> */}

        <Parallax
          speed={30}
          rootMargin={{ top: 500, right: 100, bottom: 0, left: 100 }}
        >
          <div className="col col2">
            <div className="title-container">
              <h3 className="">Make it last forever</h3>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet={`${coupleShotLandscape2} 561w `} />
                <img src={coupleShotLandscape2} alt="Image 3" />
              </picture>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet={`${coupleNightShot} 561w `} />
                <img src={coupleNightShot} alt="Image 3" />
              </picture>
            </div>
            <div className="image-container">
              <picture>
                <source srcSet={`${coupleShotLandscape3} 561w `} />
                <img src={coupleShotLandscape3} alt="Image 3" />
              </picture>
            </div>
          </div>
        </Parallax>
      </PhotoReelSection>

      <TwoColumnPhotoLayout1 darktheme={false}>
        <div className="outer-grid tablet-inner-grid vertical-padding-large desktop-inner-grid inner-container">
          <PhotoWithSmallTitle>
            <picture>
              <source srcSet={`${guysWalking} 1000w, ${guysWalkinx75} 750w`} />
              <img src={guysWalking} alt="Guys Walking" />
            </picture>
            <h4>Gentlemen approach!</h4>
          </PhotoWithSmallTitle>

          <PhotoWithSmallTitle>
            <picture>
              <source
                srcSet={`${coupleHandHolding2} 1000w, ${coupleHandHolding2x75} 750w`}
              />
              <img src={coupleHandHolding2} alt="Couple Holding Hands" />
            </picture>
            <h4>Love in the distance</h4>
          </PhotoWithSmallTitle>
        </div>
      </TwoColumnPhotoLayout1>
      <PhotoSlider>
        <div class="slide-track">
          <div class="slide">
            <img src={coupleLightingLamp} alt="" />
          </div>
          <div class="slide">
            <img src={kidsplaying} alt="" />
          </div>
          <div class="slide">
            <img src={coupleinrain} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort5} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort6} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort7} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort8} alt="" />
          </div>

          <div class="slide">
            <img src={coupleLightingLamp} alt="" />
          </div>
          <div class="slide">
            <img src={kidsplaying} alt="" />
          </div>
          <div class="slide">
            <img src={coupleinrain} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort5} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort6} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort7} alt="" />
          </div>
          <div class="slide">
            <img src={couplePort8} alt="" />
          </div>
        </div>
      </PhotoSlider>

      <ContactForm className="outer-grid desktop-inner-grid2 vertical-padding-large" />
    </HomeWrapper>
  );
};

export default Home;
