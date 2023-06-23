import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../../common/styles/Container.module.css";
import Project from "./Project/Project";
import todo from "../../assets/images/todo.png";
import social from "../../assets/images/social.jpg";
import meat from "../../assets/images/meat.png";
import cards from "../../assets/images/cards.png";
import Title from "../../common/components/Title";

export type ProjectType = {
  projectName: string;
  description: string;
  img: string;
  url: string;
};

const Projects = () => {
  const myProjects: ProjectType[] = [
    {
      projectName: "Learning Cards",
      description: "React, Redux Toolkit, RTK Query, TypeScript, Material UI, Unit tests",
      img: cards,
      url: "https://knuckostya.github.io/CardTraining",
    },
    {
      projectName: "Social Network",
      description: "React, Redux, TypeScript, Material UI, Unit tests",
      img: social,
      url: "https://petukhovart.github.io/samurai-way/",
    },
    {
      projectName: "Todolist",
      description: "React, Redux, TypeScript, Material UI, Storybook, Unit tests",
      img: todo,
      url: "https://petukhovart.github.io/todolist_main/",
    },
    {
      projectName: "Meat Shop",
      description: "React, Redux Toolkit, RTK Query, TypeScript, Material UI, Unit tests",
      img: meat,
      url: "https://petukhovart.github.io/Meat/",
    },
  ];

  const projects = myProjects.map((pr, index) => (
    <Project
      key={index}
      projectName={pr.projectName}
      description={pr.description}
      img={pr.img}
      url={pr.url}
    />
  ));

  return (
    <div className={styles.projectsBlock}>
      <div id={"projects"} className={`${styles.projectsContainer} ${styleContainer.container}`}>
        <Title title={"My projects"} />
        <div className={styles.projects}>{projects}</div>
      </div>
    </div>
  );
};

export default Projects;
