import React, { Component } from 'react';
import { Link } from "react-router-dom";
import H1 from "../styled/H1";

import Button from "material-ui/Button";

class HomePage extends Component {
    render() {
        return (
            <div>
                <H1>Home page</H1>
                <Button raised>Button</Button>
                <Link to='/courses'>Cources</Link>
            </div>
        );
    }
}

export default HomePage;