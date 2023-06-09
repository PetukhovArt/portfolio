import React from "react";
import styles from "./Main.module.scss";
import styleContainer from "../../common/styles/Container.module.css";
import me from "../../assets/images/me.jpg";
import me2 from "../../assets/images/me2.png";
import ReactTypingEffect from "react-typing-effect";

const Main = () => {
  return (
    <div id={"main"} className={styles.mainBlock}>
      <div className={styleContainer.container}>
        <div className={styles.greeting}>
          <span className={styles.text}>Hi there!</span>
          <h1>I am Artem Petukhov</h1>
          <ReactTypingEffect
            className={styles.animateText}
            speed={100}
            text={["Frontend React Developer"]}
          />
        </div>
        <div className={styles.photoBlock}>
          <div className={styles.photo}>
            <img src={me2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
