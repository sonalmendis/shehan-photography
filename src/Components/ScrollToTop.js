// This component is needed to make sure the page starts at the top whenever you go to another page, its placed in app.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importing the useLocation hook from react-router-dom to obtain the current location of the app

// Defining a functional component ScrollToTopOnRouteChange that will scroll the window to the top when the route changes
function ScrollToTopOnRouteChange() {
  // Calling the useLocation hook to obtain the current location object of the app
  const { pathname } = useLocation();

  // Using the useEffect hook to scroll to the top of the window whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0); // Using the scrollTo method of the window object to scroll to the top
  }, [pathname]); // Specifying that the useEffect hook should re-run only when the pathname changes

  // Returning null as this component doesn't render any content
  return null;
}

// Exporting the ScrollToTopOnRouteChange component as the default export of this module
export default ScrollToTopOnRouteChange;
