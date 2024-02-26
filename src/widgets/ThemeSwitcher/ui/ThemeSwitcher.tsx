import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {onThemeChange} = useTheme()
    const {t} = useTranslation();

    return <Button
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={onThemeChange}>
        {t('Change Theme')}
    </Button>
}
