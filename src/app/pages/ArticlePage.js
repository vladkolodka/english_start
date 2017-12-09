import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadArticle } from "../actions/articleActions";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import AlbumIcons from "material-ui-icons/Album";
import { withStyles } from "material-ui/styles";

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.props.loadArticle(parseInt(props.match.params.id));
  }

  render() {
    const {classes} = this.props;
    if (!this.props.article) return null;
    return (
      <div className={classes.container}>
        <Typography type='display2' className={classes.title}>
          <AlbumIcons/>
          {this.props.article.title}
        </Typography>

        <Divider/>

        <img src={this.props.article.imageUrl} className={classes.image}/>

        <Typography className={classes.title} type='body1'>
          {this.props.article.description}
        </Typography>

        <Typography type='body1'>
          {this.props.article.text}
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  article: articles.item
});

const styles = {
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },
  title: {
    paddingLeft: 10,
    paddingBottom: 5
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    display: 'block',
    borderRadius: 20,
    width: '40%',
    margin: '0 auto',
    borderLeft: '15px solid rgba(128, 128, 128, 0.31)'
  }
};

export default withStyles(styles)(connect(mapStateToProps, {loadArticle})(ArticlePage));