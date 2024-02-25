import './styles/index.scss';
import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, onThemeChange} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>

        <button onClick={onThemeChange}>Change Theme</button>

        <AppRouter/>
    </div>
}
