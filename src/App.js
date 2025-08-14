import React from "react";
import Navbar from "./components/NavBar/navbar";
import Body from "./components/body/body";
import Gallery from "./components/gallery/gallery";
import Trailer from "./components/Trailer/Trailer";
import Work from "./components/work/work";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/contact";
import Services from "./components/services/services";
import Nominations from "./components/Nominations/Nomination.js"

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Services />
      <Trailer />
      <Awards />
      <Nominations />
      <Work />

      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
