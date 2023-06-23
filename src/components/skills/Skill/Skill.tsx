import React, { FC } from "react";
import styles from "./Skill.module.scss";
import { SkillType } from "../Skills";

const Skill: FC<SkillType> = (props) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>
        <img src={props.icon} alt="icon" />
      </div>
      <h4 className={styles.technologyName}>{props.tech}</h4>
    </div>
  );
};

export default Skill;
