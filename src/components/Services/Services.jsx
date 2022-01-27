import React,{useEffect} from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import AOS from 'aos';
import { IconContext } from "react-icons/lib";
import { Underline } from "../../globalStyles";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardLength,
} from "./ServicesElements";

function Pricing() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },)
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 65 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Services</PricingHeading>
          <Underline />
          <PricingContainer>
            <PricingCard data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>100% RESPONSIVE</PricingCardPlan>
                <PricingCardLength>
                  Get Mobile-First Cross-Browser And Cross-Device Compatible
                  Website
                </PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>MERN STACK</PricingCardPlan>
                <PricingCardLength>
                  Get Developed With MERN, Fastest Technology Stack On Planet
                  Earth
                </PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>SEO FRIENDLY</PricingCardPlan>
                <PricingCardLength>
                  Get Seo Friendly Website For Your Business Growth
                </PricingCardLength>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
