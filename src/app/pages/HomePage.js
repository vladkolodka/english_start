import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadLatestArticles } from "../actions/articleActions";

import Article from "../components/Article";

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.props.loadLatestArticles();
  }

  render() {
    return (
      <div>
        {/*{this.props.articles.map(item => <Article key={item.id} article={item}/>)}*/}
      </div>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  articles: articles.items
});

export default connect(mapStateToProps, {
  loadLatestArticles
})(HomePage);