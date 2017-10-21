import React, { Component } from 'react';
import { Link } from "react-router-dom";
import H1 from "../styled/H1";
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
                <Link to='/courses'>Cources</Link>
                {this.props.articles.map(item => <Article key={item.id} article={item} />)}
            </div>
        );
    }
}

const mapStateToProps = ({ articles }) => ({
    articles: articles.items
});

export default connect(mapStateToProps, {
    loadLatestArticles
})(HomePage);