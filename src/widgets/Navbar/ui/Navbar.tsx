import React from "react";
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/about' className={cls.mainLink}>ABOUT</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/'>HOME</AppLink>
        </div>
    </div>
}
