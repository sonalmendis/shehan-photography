import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react"; // Animated hamburger icon#
import { HashLink, NavHashLink } from "react-router-hash-link"; // This is to enable smooth scrolling to the contact form or anything else with an ID hash jump
import styled from "styled-components/macro";
import GlobalStyles from "../Styles/GlobalStyles";
import * as GlobalVariables from "../Styles/GlobalVariables";
import Button from "../Components/Button";
import Logo from "../Images/logo-white.svg";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity

// The mobile menu container is both offset by a negative margin AND has 0 opacity, that way it is not visible and does not take up space on the page

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: transparent;
  z-index: 99;
  transition: background-color 0.2s ease-out;
  color: white;
  width: 100%;

  // This is the outer container needed to have a smoothly working expandable mobile menu, this contains only the top parts
  .top-container {
    background: rgba(0, 0, 0, 0);
    transition: all 0.2s;
    &.open {
      background: rgba(0, 0, 0, 1) !important;
    }
    .inner-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.6em;
      padding-bottom: 0.6em;
      z-index: 3;
      position: relative;
    }
  }

  .left-column {
    display: flex;

    align-items: center;
    .logo {
      width: 9.5em;
    }
  }

  // Hide the links on mobile and then show them on larger screens while hiding the button
  .right-column {
    margin-top: -1.5%;
    a {
      font-family: ${GlobalVariables.fonts.font1};
      display: none;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    @media ${GlobalVariables.device.landscape} {
      margin-top: 0;
      a {
        display: inline-block;
        margin-right: 1em;
        &:last-of-type {
          margin-right: 0;
        }
      }
      .hamburger-react {
        display: none;
      }
    }
  }

  .mobile-menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 21vh;
    height: 100vh;
    backdrop-filter: blur(0.5em);
    background-color: rgba(0, 0, 0, 0.8);
    margin-top: -150vh;
    opacity: 0;
    z-index: 2;
    transition: all 0.2s;
    color: white;
    width: 100%;
    padding-top: 20px;

    &.open {
      opacity: 1;
      margin-top: 0;
    }
    a {
      display: block;
      cursor: pointer;

      margin-bottom: 3vh;
      font-size: 2rem;
    }
  }
`;

const Header = () => {
  // Define state variable to keep track of whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define state variable to keep track of the background opacity
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const isDesktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  });

  // Define a function to toggle the menu state when the button is clicked
  const handleMenuButtonClick = (el) => {
    if (!isDesktop) {
      if (isMenuOpen === true) {
        setIsMenuOpen(false);
        document.body.style.overflowY = "visible";
      } else {
        if (el.target && el.target.id === "header-logo") {
          document.body.style.overflowY = "visible";
        } else {
          setIsMenuOpen(true);
          document.body.style.overflowY = "hidden";
        }
      }
    }
  };

  // Define the menu link tags as a function so each one gets an OnClick (to close the mobile menu when a link has been pressed)
  function MobileLink({ to, children }) {
    return (
      <Link to={to} onClick={handleMenuButtonClick}>
        {children}
      </Link>
    );
  }

  // Use an effect to update the background opacity when the user scrolls
  useEffect(() => {
    function handleScroll() {
      // Define a scroll event handler function to calculate the opacity based on the current scroll position
      const opacity = Math.min(window.pageYOffset / 100, 1);
      setBackgroundOpacity(opacity);
    }

    // Add the scroll event listener and return a cleanup function to remove the listener when the component unmounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a style object for the background with the calculated opacity
  const backgroundStyle = {
    backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
  };

  // This function is used to offset the scroll to the contact form when the contact link is clicked, it uses the react-router-hash-link package
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // This is the offset, change this if you need to
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <div
        className={`top-container ${isMenuOpen ? "open" : ""} `}
        style={backgroundStyle}
      >
        <div className="outer-grid inner-container">
          <div className={`left-column`}>
            <NavHashLink to={"/#top"} onClick={handleMenuButtonClick}>
              <img className="logo" src={Logo} alt="logo" />
            </NavHashLink>
          </div>

          <div className="right-column">
            <Link to="/gallery">Gallery</Link>
            <NavHashLink to="/#contact-form">Contact Me</NavHashLink>
            {/* Render the menu button*/}

            <Hamburger
              size={30}
              toggled={isMenuOpen}
              toggle={handleMenuButtonClick}
            />
          </div>
        </div>
      </div>

      {/* If the menu is open, render a list of links */}
      <div
        className={`mobile-menu-container ${
          isMenuOpen ? "open" : ""
        } outer-grid`}
      >
        <div className="individual-link-container">
          <MobileLink to="/gallery">Gallery</MobileLink>
        </div>

        <div className="individual-link-container">
          <HashLink
            to={{
              pathname: "/",
              hash: "#contact-form",
              state: { fromExternalPage: true },
            }}
            onClick={handleMenuButtonClick}
          >
            Contact Me
          </HashLink>
        </div>
      </div>

      <GlobalStyles />
    </HeaderWrapper>
  );
};

export default Header;
