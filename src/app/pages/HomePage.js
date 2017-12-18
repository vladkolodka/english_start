import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadLatestArticles } from "../actions/articleActions";

import Article from "../components/Article";

class HomePage extends Component {
  state = {
    count: 5
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.onLoad();
  }

  onLoad = () => {
    this.props.loadLatestArticles(this.state.count);
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <input type="text" value={this.state.count} onChange={e => this.setState({count: e.target.value})}/>
        <button onClick={this.onLoad}>Reload</button>

        {this.props.articles.map(item => <Article key={item.id} article={item}/>)}

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