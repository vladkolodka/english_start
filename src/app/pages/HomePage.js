import React, { Component } from 'react';
import { Link } from "react-router-dom";
import H1 from "../styled/H1";

class HomePage extends Component {
    render() {
        return (
            <div>
                <H1>Home page</H1>
                <Link to='/courses'>Cources</Link>
            </div>
        );
    }
}

export default HomePage;