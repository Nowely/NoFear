import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {teacherRoutes} from "../routes";

const TeachView = () => {
    return (
        <>
            {teacherRoutes.map(({key, path, Component}) =>
                <Route key={key} path={path} component={Component} exact/>
            )}
        </>
    );
};

export default TeachView;