import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onSidebarToggle = () => {
        setCollapsed(prev => !prev)
    }
    
    return <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onSidebarToggle}>Toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
        </div>
    </div>
}
