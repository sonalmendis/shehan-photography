import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./Pages/Home.js";
import Page2 from "./Pages/Page2.js"; // This can be any page
import Header from "./Components/Header.js"; // You can use this either in app.js or within individual pages depending on your needs
import Footer from "./Components/Footer.js"; // Likewise with footer (though unlikely to be needed in individual pages)

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
