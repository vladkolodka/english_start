import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CoursesPage extends Component {
  render() {
    return (
      <div>
        <h1>Cources page</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default CoursesPage;