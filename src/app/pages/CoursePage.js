import React from 'react';
import { connect } from 'react-redux';
import Typography from "material-ui/Typography";
import Article from '../components/Article';
import {loadCourseArticles} from '../actions/articleActions';

class CoursePage extends React.Component {

  state = {
    page: 0
  };

  componentDidMount() {
    this.props.loadCourseArticles(this.props.course.id, this.state.page);
  }

  render() {
    return <div>
      <Typography type='display2'>
        {this.props.course.name}
      </Typography>

      {this.props.articles.map(item => <Article key={item.id} article={item}/>)}
    </div>;
  }
}

const mapStateToProps = ({ courses, articles }, props) => ({
  course: courses.find(c => c.id === props.match.params.id),
  articles: articles.items
});

export default connect(mapStateToProps, {loadCourseArticles})(CoursePage);
