import React, {useEffect} from "react";
import { portfolioData } from "../../pages/HomePage/Data";
import PortfolioItem from "./PortfolioItem";
import { Container } from "../../globalStyles";
import AOS from 'aos';
import {
  PortfolioCard,
  PortFolioWrapper,
  SectionText,
  TopLine,
  TopLineHeading,
} from "./PortfolioElement";
import { UnderLIne } from "../Skills/SkillsElement";

const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },)
  return (
    <PortFolioWrapper>
      <Container>
        <SectionText>
          <TopLine>Please check my project</TopLine>
          <TopLineHeading>Portfolio</TopLineHeading>
          <UnderLIne />
        </SectionText>
        <PortfolioCard>
          {portfolioData.map((project) => (
            <PortfolioItem key={project.id} portfolio={project} />
          ))}
        </PortfolioCard>
      </Container>
    </PortFolioWrapper>
  );
};

export default Portfolio;
