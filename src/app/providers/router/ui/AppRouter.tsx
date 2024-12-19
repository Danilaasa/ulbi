import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => {
                return (
                    <Route path={path} key={path} element={
                        <Suspense fallback={<div>loading...</div>} >
                            <div className="page-wrapper" >
                                {element}
                            </div>
                        </Suspense>
                    }
                    />
                )})})
        </Routes>
    );
};