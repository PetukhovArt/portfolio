import React, {ButtonHTMLAttributes, FC} from 'react';
import s from './Button.module.css';

type ButtonProps = {
    color?: string;
    background?: string;
    width?: string;
    height?: string;
    text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> =
    ({ color,text, background, height, width,children, ...otherProps }) => {
    const buttonStyles = {
        color: color,
        background: background,
        width: width,
        height: height,
        // Add any additional styles here
    };

    return (
        <button style={buttonStyles} {...otherProps} className={s.button}>
            {text}
            {children}
        </button>
    );
};

