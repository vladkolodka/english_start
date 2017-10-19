import React, { Component } from 'react';

const image = require('./assets/img/img.png');

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <img src={image} />
            </div>
        );
    }
}