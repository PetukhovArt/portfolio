import React from 'react';
import s from './Footer.module.css'
import style from '../../common/styles/container.module.css'
import github from '../../assets/images/github.svg'
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import codewars from '../../assets/images/codewars.svg'


export const Footer = () => {


    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
                <h3 className={s.name}>Artem Petukhov</h3>
                <div className={s.links}>
                    <a href="#"><img src={github} alt="github"/></a>
                    <a href="#"><img src={codewars} alt="telegram"/></a>
                    <a href="#"><img src={telegram} alt="telegram"/></a>
                    <a href="#"><img src={instagram} alt="instagram"/></a>
                </div>
                <span><b>© All rights reserved 2023</b></span>
            </div>
        </div>
    );
}


