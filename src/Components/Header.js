import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react"; // Animated hamburger icon
import styled from "styled-components/macro";
import GlobalStyles from "../Styles/GlobalStyles";
import * as GlobalVariables from "../Styles/GlobalVariables";

import Logo from "../Images/dummy logo.svg";

// The mobile menu container is both offset by a negative margin AND has 0 opacity, that way it is not visible and does not take up space on the page

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: transparent;

  transition: background-color 0.2s ease-out;
  color: white;
  width: 100%;

  // This is the outer container needed to have a smoothly working expandable mobile menu, this contains only the top parts
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    z-index: 3;
    position: relative;
    background: rgba(0, 0, 0, 0);
    transition: all 0.2s;
    &.open {
      background: rgba(0, 0, 0, 1) !important;
    }
  }

  .left-column {
    .logo {
      width: 104px;
    }
  }

  // Hide the links on mobile and then show them on larger screens while hiding the button
  .right-column {
    a {
      display: none;
    }
    @media ${GlobalVariables.device.laptop} {
      a {
        display: inline-block;
      }
      .hamburger-react {
        display: none;
      }
    }
  }

  .mobile-menu-container {
    height: 100vh;
    margin-top: -150vh;
    opacity: 0;
    z-index: 2;
    transition: all 0.2s;
    color: white;
    background: #393939;
    padding: 20px;
    &.open {
      opacity: 1;
      margin-top: 0;
    }
    a {
      display: block;
      cursor: pointer;
      margin-bottom: 4vh;
      font-size: 1.6rem;
    }
  }
`;

const Header = () => {
  // Define state variable to keep track of whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define state variable to keep track of the background opacity
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  // Define a function to toggle the menu state when the button is clicked
  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);

    // Toggle the body overflow to prevent scrolling when the menu is open
    isMenuOpen
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
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

  return (
    <HeaderWrapper>
      <div
        className={`top-container ${isMenuOpen ? "open" : ""}`}
        style={backgroundStyle}
      >
        <div className={`left-column`}>
          <img className="logo" src={Logo} alt="logo" />
        </div>

        <div className="right-column">
          <Link to="/Page2">Page 2</Link>
          {/* Render the menu button*/}

          <Hamburger toggled={isMenuOpen} toggle={handleMenuButtonClick} />
        </div>
      </div>

      {/* If the menu is open, render a list of links */}
      <div className={`mobile-menu-container ${isMenuOpen ? "open" : ""}`}>
        <MobileLink to="/">Home</MobileLink>
        <MobileLink to="/Page2">Page 2</MobileLink>
      </div>
      <GlobalStyles />
    </HeaderWrapper>
  );
};

export default Header;
