import React, { FC } from "react";
import styles from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.css";
import githubIcon from "../../assets/images/footer-icons/github-mark-white.png";
import telegramIcon from "../../assets/images/footer-icons/telegram-icon.png";
import linkedInIcon from "../../assets/images/footer-icons/linkedin-icon.png";
import codewarsIcon from "../../assets/images/footer-icons/codewars.svg";
import Title from "../../common/components/Title";

type IconPropsType = {
  href: string;
  icon: string;
  alt: string;
};

const Icon: FC<IconPropsType> = ({ href, icon, alt }) => {
  return (
    <a href={href} target={"_blank"}>
      <div className={styles.feedbackIcon}>
        <img src={icon} alt={alt} />
      </div>
    </a>
  );
};

const Footer = () => {
  const media: IconPropsType[] = [
    { href: "https://t.me/niarpe", icon: telegramIcon, alt: "telegram" },
    {
      href: "https://www.linkedin.com/in/petukhovartem/",
      icon: linkedInIcon,
      alt: "linkedin",
    },
    { href: "https://github.com/PetukhovArt", icon: githubIcon, alt: "github" },
    { href: "https://www.codewars.com/users/PetukhovArt", icon: codewarsIcon, alt: "codewars" },
  ];

  return (
    <div className={styles.footerBlock}>
      <div className={`${styleContainer.container} ${styles.footerContainer}`}>
        <Title title='links' fontSize={25} />
        <div className={styles.feedbackContainer}>
          {media.map((i, index) => (
            <Icon key={index} icon={i.icon} href={i.href} alt={i.alt} />
          ))}
        </div>
        <h2 className={styles.rights}>© 2023</h2>
      </div>
    </div>
  );
};

export default Footer;
