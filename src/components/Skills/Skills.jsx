import React from "react";
import { Container } from "../../globalStyles";
import {
  SkillInfo,
  SkillsWrapper,
  TopLine,
  TopLineHeading,
  UnderLIne,
} from "./SkillsElement";
import { SkillData } from "../../pages/HomePage/Data";
import ProgressBar from "./ProgressBar";
import { SectionText } from "../Portfolio/PortfolioElement";

const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>
        <SectionText>
          <TopLine>My level of knowledge in some tools</TopLine>
          <TopLineHeading>My Skills</TopLineHeading>
          <UnderLIne />
        </SectionText>
        <SkillInfo>
          {SkillData.map((skill) => (
            <ProgressBar key={skill.id} skills={skill} />
          ))}
        </SkillInfo>
      </Container>
    </SkillsWrapper>
  );
};

export default Skills;
