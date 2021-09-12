import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { studentRoutes } from '../routes';

const StudentView = () => {
    return (
        <>
            {studentRoutes.map(({key, path, Component}) =>
                <Route key={key} path={path} component={Component} exact/>
            )}
        </>
    );
};

export default StudentView;