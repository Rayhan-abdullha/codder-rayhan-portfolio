import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSectionElement";
import AOS from "aos";
import "aos/dist/aos.css";

function InfoSection({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  subtitle,
  headlineText,
  padding,
}) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 500,
    });
  });
  return (
    <>
      <InfoSec padding={padding}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper data-aos={`${imgStart && "fade-up"}`}>
                <TopLine>{topLine}</TopLine>
                <Heading headlineText={headlineText}>{headline}</Heading>
                <Subtitle subtitle={subtitle}>{description}</Subtitle>
                <a
                  href="https://drive.google.com/file/d/1jNM76NBs-55NpGKP3Ox57FZKWk_LgfQw/view"
                  target="_blank"
                >
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn data-aos={`${imgStart && "fade-down"}`}>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
