import React from 'react';
import s from './Intro.module.css'
import style from '../../common/styles/container.module.css'


export const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={style.container}>
                <div className={s.aboutWrapper}>
                    <span className={s.aboutText}>
                        Hello! <br/>
                        My name is Artem Petukhov <br/>
                        I'm Frontend developer! <br/>
                    </span>
                    <div className={s.aboutImg}>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}


