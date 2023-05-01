import React from 'react';
import s from './SearchingFor.module.css'
import style from '../../common/styles/container.module.css'
import {Button} from '../button/Button';


export const SearchingFor = () => {


    return (
        <div className={s.searchingBlock}>
            <div className={`${style.container} ${s.searchingContainer}`}>
                <h3>Looking into remote work options</h3>
                <Button text={'Hire me'} width={'100px'} height={'35px'}/>
            </div>
        </div>
    );
}


