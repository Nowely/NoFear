import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {metodistroutes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {metodistroutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;