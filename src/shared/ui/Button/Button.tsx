import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";

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

    return <button
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
}
