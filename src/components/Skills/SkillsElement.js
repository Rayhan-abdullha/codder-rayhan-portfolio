import styled from "styled-components";

export const SkillsWrapper = styled.div`
  background: #111;
  padding: 100px 0;
`;
export const TopLine = styled.p`
  color: #9f9f9f;
`;
export const TopLineHeading = styled.h2`
  color: #fff;
  font-size: 38px;
  line-height: 2;
`;
export const SkillInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ProgressBarWrapper = styled.div``;
export const SkillText = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const SkillsTitle = styled.span`
  color: #9f9f9f;
  flex-basis: 50%;
  font-size: 20px;
`;
export const Percentage = styled.span`
  color: #9f9f9f;
  font-size: 20px;
  margin-left: ${({ percentage }) => percentage && `calc(${percentage} - 50%)`};
`;
export const ProgressBarMainDiv = styled.div`
  background: #2f2f2f;
`;
export const Progresses = styled.div`
  background: #009e66;
  width: ${({ progress }) => progress && progress};
  padding: 5px;
`;

export const UnderLIne = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: #009e66;
`;
