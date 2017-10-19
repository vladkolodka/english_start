import React, { Component } from 'react';
import { Provider } from "react-redux";
import createStore from "./store";
import RootRouter from "./RootRouter";

const { store, history } = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootRouter history={history} />
            </Provider>
        );
    }
}