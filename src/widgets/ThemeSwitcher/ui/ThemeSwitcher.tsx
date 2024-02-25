import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {onThemeChange} = useTheme()

    return <Button
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={onThemeChange}>
        Change Theme
    </Button>
}
