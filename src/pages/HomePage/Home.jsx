import React from "react";
import { Contact, Portfolio, Services, Skills } from "../../components";
import InfoSection from "../../components/InfoSection/InfoSection";
import ScrollNav from "../../components/ScrollNav";
import { homeObjOne, homeObjTwo, portfolioData } from "./Data";

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <ScrollNav />
    </React.Fragment>
  );
};

export default Home;
