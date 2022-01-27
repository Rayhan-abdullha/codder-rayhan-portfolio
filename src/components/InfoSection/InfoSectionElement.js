import styled from "styled-components";

export const InfoSec = styled.div`
  padding: ${({ padding }) => (padding ? "170px 0" : "100px 0 80px 0")};
  background: #101010;

  @media screen and (max-width: 768px) {
    padding: ${({ padding }) => (padding ? "130px 0 100px 0" : "70px 5px")};
  }
  @media screen and (max-width: 472px) {
    text-align: ${({ padding }) => padding && "center"};
    padding: ${({ padding }) => (padding ? "110px 0 100px 0" : "70px 5px")};
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.p`
  color: hsla(0, 0%, 100%, 0.85);
  font-size: 18px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 450px;
  border-left: 5px solid #009e66;
  border-bottom: 5px solid #009e66;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  transition: all 1s;

  &:hover {
    transform: scale(0.95);
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: all 1s;
  }
  @media screen and (max-width: 600px) {
    max-height: 400px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${({ headlineText }) => (headlineText ? "55px" : "38px")};
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0.25px;
  @media screen and (max-width: 927px) {
    font-size: ${({ headlineText }) => (headlineText ? "45px" : "38px")};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ headlineText }) => (headlineText ? "40px" : "38px")};
  }
  @media screen and (max-width: 455px) {
    font-size: ${({ headlineText }) => (headlineText ? "38px" : "38px")};
  }
  @media screen and (max-width: 347px) {
    font-size: ${({ headlineText }) => (headlineText ? "32px" : "38px")};
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: ${({ subtitle }) => (subtitle ? "18px" : "18px")};
  line-height: 2;
  font-weight: ${({ subtitle }) => (subtitle ? 600 : 400)};
  letter-spacing: 0.25px;
  color: ${({ subtitle }) => (subtitle ? "#00cf5d" : "#9f9f9f")};
`;
