import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadLatestArticles } from "../actions/articleActions";

import Article from "../components/Article";

import { login, logout } from '../api';

class HomePage extends Component {
  onLogin = () => {
    login('vladkolodka@gmail.com', 'TestPass1!').then(response => {
      console.log(response);
    });
  };

  onLogout = () => {
    logout().then(response => {
      console.log(response);
    });
  };

  constructor(props) {
    super(props);

    this.props.loadLatestArticles();
  }

  render() {
    return (
      <div>
        <button onClick={this.onLogin}>Login</button>
        <button onClick={this.onLogout}>Logout</button>
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