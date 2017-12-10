import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { assign, loadCourses, setLearnStatus } from '../actions/courseActions';
import { connect } from 'react-redux';
import Course from '../components/Course';

class CoursesPage extends Component {
  state = {
    page: 0
  };

  setCourseStudied = (courseId, status) => {
    this.props.setLearnStatus(courseId, status);
  };

  setCourseAssignment = (courseId) => {
    this.props.assign(courseId);
  };

  onCourseOpen = (courseId) => {
    this.props.history.push(`/course/${courseId}`);
  };

  componentDidMount() {
    this.props.loadCourses(this.state.page);
  }

  render() {
    return (
      <div>
        {this.props.courses.map(c => <Course
          onOpen={this.onCourseOpen}
          setStudied={this.setCourseStudied}
          setAssignment={this.setCourseAssignment}
          key={c.id} course={c}/>)}

        <Link to='/'>Home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps, { loadCourses, setLearnStatus, assign })(CoursesPage);