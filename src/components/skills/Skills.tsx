import React from "react";
import styles from "./Skills.module.scss";
import Skill from "./Skill/Skill";
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/Title";
import react from "../../assets/images/skills/react.png";
import ts from "../../assets/images/skills/typescript.png";
import redux from "../../assets/images/skills/redux.svg";
import unittests from "../../assets/images/skills/unit-tests.svg";
import storybook from "../../assets/images/skills/storybook.svg";
import git from "../../assets/images/skills/git.svg";
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import mui from "../../assets/images/skills/mui.png";
import form from "../../assets/images/skills/form.png";

export type SkillType = {
  tech: string;
  icon: string;
};

const Skills = () => {
  const mySkills: SkillType[] = [
    { tech: "React", icon: react },
    { tech: "Redux / Redux Toolkit", icon: redux },
    { tech: "TypeScript", icon: ts },
    { tech: "Storybook", icon: storybook },
    { tech: "Unit tests", icon: unittests },
    { tech: "RTK Query", icon: redux },
    { tech: "React Hook Form", icon: form },
    { tech: "HTML", icon: html },
    { tech: "CSS", icon: css },
    { tech: "SAAS/SCSS", icon: css },
    { tech: "Git", icon: git },
    { tech: "Material UI", icon: mui },
  ];

  const skills = mySkills.map((skill, index) => (
    <Skill key={index} tech={skill.tech} icon={skill.icon} />
  ));

  return (
    <div className={styles.skillsBlock}>
      <div id={"skills"} className={`${styles.skillsContainer} ${styleContainer.container}`}>
        <Title title={"My Skills"} />
        <div className={styles.skills}>{skills}</div>
      </div>
    </div>
  );
};

export default Skills;
