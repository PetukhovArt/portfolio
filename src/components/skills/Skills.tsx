import React from 'react';
import s from './Skills.module.css'
import style from '../../common/styles/container.module.css'


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    {/*<Skill/>*/}
                </div>
            </div>
        </div>
    );
}


