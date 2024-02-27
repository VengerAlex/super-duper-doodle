import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames('', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
