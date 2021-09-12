import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {metodistRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {metodistRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;