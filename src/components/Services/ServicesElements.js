import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101010;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h2`
  font-size: 38px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #18191a;
  box-shadow: 0 6px 20px rgb(4 17 42 / 20%);
  width: 280px;
  height: 350px;
  text-decoration: none;
  border-radius: 5px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
`;

export const PricingCardLength = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
`;
