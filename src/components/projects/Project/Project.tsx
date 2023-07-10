import React, { FC } from "react";
import styles from "./Project.module.scss";
import { ProjectType } from "../Projects";

const Project: FC<ProjectType> = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${props.img})`,
  };

  return (
    <div className={styles.project}>
      <div className={styles.projectImage} style={backgroundStyle}>
        <a href={props.url} target={"_blank"} className={`${styles.button} ${props.disabled && styles.disabled}`}>
          watch
        </a>
      </div>
      <div className={styles.aboutProject}>
        <h4 className={styles.projectName}>{props.projectName}</h4>
        {props.subtitle && <span className={styles.subtitle}>{props.subtitle}</span>}
        <div className={styles.projectDescription}>
          Applied technologies:
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
