import React from 'react';
import s from './Projects.module.css'
import style from '../../common/styles/container.module.css'
import {state} from '../../state/state';
import {Button} from '../button/Button';


export const Projects = () => {


    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={s.projects}>
                    {state.projects.map(el =>
                        <div key={el.id} className={s.project}>
                            <div className={s.projectLogo}>
                                <img src={el.logo} alt="logo"/>
                                <div className={s.projectButton}>
                                    <Button text={'Click to see'} color={'black'} width={'120px'} height={'30px'}/>
                                </div>
                            </div>
                            <h3 className={s.title}>{el.name}</h3>
                            <span className={s.description}>{el.description}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


