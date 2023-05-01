import React from 'react';
import s from './Skills.module.css'
import style from '../../common/styles/container.module.css'
import {state} from '../../state/state';


export const Skills = () => {


    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={s.skills}>
                    {state.skills.map(el =>
                        <div key={el.id} className={s.skill}>
                            <img src={el.logo} alt="logo"/>
                            <h3 className={s.title}>{el.name}</h3>
                            <span className={s.description}>{el.description}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


