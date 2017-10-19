import React, { Component } from 'react';
import { Provider } from "react-redux";
import createStore from "./store";

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <div>
                    <h1>Hello World!</h1>
                </div>
            </Provider>
        );
    }
}