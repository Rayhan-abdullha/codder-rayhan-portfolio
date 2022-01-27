import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  PortfolioImg,
  PortfolioTitle,
  SinglePortfolio,
  PortfolioInfo,
  GithubLink,
} from "./PortfolioElement";

const PortfolioItem = ({ portfolio }) => {
  const { code, title, img, liveLink } = portfolio;
  return (
    <>
      <SinglePortfolio href={liveLink} 
        target="_blank" data-aos="zoom-in">
        <PortfolioImg src={img} alt="notFound" />
        <PortfolioInfo>
          <PortfolioTitle>{title}</PortfolioTitle>
          <GithubLink href={code} target="_blank">
            <FaGithub />
          </GithubLink>
        </PortfolioInfo>
      </SinglePortfolio>
    </>
  );
};

export default PortfolioItem;
