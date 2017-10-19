import React from 'react';
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";

const RootRouter = ({ history }) => <ConnectedRouter history={history}>
    <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/courses' component={CoursesPage} />
    </Switch>
</ConnectedRouter>;

export default RootRouter;