import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join my exclusive membership to receive the latest blog and trends
        </FooterSubHeading>
        <FooterSubText>You can subscribe here</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            RAYHAN
          </SocialLogo>
          <WebsiteRights>RAYHAN © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/profile.php?id=100054767896181"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/channel/UC1NRZYzaieER4nM18l6vAAQ"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/rayhan_abdullha?fbclid=IwAR1TF3IJ5vvVfWZ4VdeYAYkaQwuGm3AGPUA4V08eg_wk-gFKCX7Np016sJU"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/rayhan-abdullah-100956189/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/Rayhan-abdullha?fbclid=IwAR1-aYkIvi-y4O-QOv3K_KWlUYj0VXRdzylkPfwOhMLoEn4YUgBEswFfjrY"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
