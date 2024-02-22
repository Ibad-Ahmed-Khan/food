import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyChooseUsTwo from "./components/WhyChooseUsTwo";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease-in-sine",
      delay: "200",
    });
    AOS.refresh();
  }, []);

  return (
    <Box>
      <Header />
      <Home />
      <WhyChooseUs />
      <WhyChooseUsTwo />
      <About />
      <WhyChooseUs />
      <Contact />
    </Box>
  );
}

export default App;

// fonts

// light  ==== Protest Revolution
// bolder  ==== Protest Riot
// stylish chock  ==== Protest Revolution, sans-serif
// links ==== Fredoka ,sans-serif
