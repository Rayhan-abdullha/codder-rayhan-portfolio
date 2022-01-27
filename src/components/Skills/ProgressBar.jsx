import React,{useEffect} from "react";
import AOS from "aos"
import {
  ProgressBarWrapper,
  ProgressBarMainDiv,
  SkillsTitle,
  Progresses,
  Percentage,
  SkillText,
} from "./SkillsElement";

const ProgressBar = ({ skills }) => {
  const { skill, done } = skills;
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },)
  return (
    <ProgressBarWrapper>
      <SkillText>
        <SkillsTitle>{skill}</SkillsTitle>
        <Percentage percentage={done}>{done}</Percentage>
      </SkillText>
      <ProgressBarMainDiv>
        <Progresses progress={done} data-aos="fade-right"></Progresses>
      </ProgressBarMainDiv>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
