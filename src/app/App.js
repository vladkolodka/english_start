import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import createStore from "./store";
// import RootRouter from "./RootRouter";
import RootContainer from "./containers/RootContainer";
const { store, history } = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path='/' component={RootContainer} />
                </ConnectedRouter>
            </Provider>
        );
    }
}