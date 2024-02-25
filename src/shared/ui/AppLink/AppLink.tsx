import {classNames} from "shared/lib/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {ReactNode} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return <Link
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
}
