import React from 'react';
import { Route, Switch } from 'react-router';
import { Login,Home } from './containers';
// import SignInForm from './components/Auth/SignIn';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={Login} />
            <Route exact path="(/)?" component={Home} />
        </Switch>
    );
};

export default Router;