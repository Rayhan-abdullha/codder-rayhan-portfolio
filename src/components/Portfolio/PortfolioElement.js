import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortFolioWrapper = styled.div`
  background: #101010;
  padding: 80px 0;
`;
export const SectionText = styled.div`
  margin-bottom: 50px;
`;
export const TopLine = styled.p`
  font-size: 16px;
`;
export const TopLineHeading = styled.h2`
  font-size: 38px;
  line-height: 2;
`;

export const PortfolioCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const SinglePortfolio = styled.a`
  width: 95%;
  padding: 20px;
  overflow: hidden;
  background: #18191a;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 992px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const PortfolioImg = styled.img`
  width: 100%;
  border-radius: 5px;
  width: 100%;
  border-radius: 5px;
  height: 300px;
  object-fit: cover;
`;
export const PortfolioTitle = styled.h3`
  margin-top: 10px;
  letter-spacing: "0.25px";
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
`;
export const PortfolioInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const GithubLink = styled.a`
  color: #fff;
  font-size: 28px;
  margin-top: 4px;
`;
