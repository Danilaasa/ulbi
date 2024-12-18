import React, {useState} from 'react';
import * as cls from "./Sidebar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [])} >
            <button onClick={onToggle} >toggle</button>
            <div className={cls.switchers} >
                <ThemeSwitcher />
            </div>
        </div>
    );
};