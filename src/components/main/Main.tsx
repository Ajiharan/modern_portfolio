import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import Container from "./style";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Profile from "components/profile/Profile";
import { About } from "components/about/About";
import Portfolio from "components/portfolio/Portfolio";
import Contact from "components/contact/Contact";

import { config } from "./config";
const Main = () => {
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container>
      <Particles init={customInit} id="tsparticles" options={{ ...config }} />
      <Profile />
      <About />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default Main;
