import React, { Suspense, useEffect } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "shared/PageLoader";





export const App = () => {
    const { theme } = useTheme()


    return (
        <div className={classNames("app", {}, [theme])} >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page" >
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
