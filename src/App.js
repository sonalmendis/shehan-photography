import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTopOnRouteChange from "./Components/ScrollToTop";
import { ParallaxProvider } from "react-scroll-parallax";
import Index from "./Pages/Home.js";

import Page2 from "./Pages/Page2.js"; // This can be any page
import Gallery from "./Pages/Gallery.js";
import Header from "./Components/Header.js"; // You can use this either in app.js or within individual pages depending on your needs
import Footer from "./Components/Footer.js"; // Likewise with footer (though unlikely to be needed in individual pages)

function App() {
  return (
    <ParallaxProvider>
      <ScrollToTopOnRouteChange />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
