import React from 'react';
import s from './Skill.module.css'
import style from '../../common/styles/container.module.css'


export const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={style.container}>
                    <div className={s.introText}>
                        <h2>Hi there!</h2>
                        <h1>I am Artem Petukhov</h1>
                        <h3>Frontend developer!</h3>
                    </div>
                    <div className={s.introPhoto}><img src="" alt=""/></div>
                </div>
        </div>
    );
}


