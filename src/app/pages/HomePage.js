import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to='/courses'>Cources</Link>
            </div>
        );
    }
}

export default HomePage;