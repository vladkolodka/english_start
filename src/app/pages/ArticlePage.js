import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadArticle } from "../actions/articleActions";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import AlbumIcons from "material-ui-icons/Album";
import { withStyles } from "material-ui/styles";

import TextInformationBlock from '../components/TextInformationBlock';
import ImageInformationBlock from '../components/ImageInformationBlock';
import VideoInformationBlock from '../components/VideoInformationBlock';

const blockTypes = {
  Text: 0,
  Image: 1,
  Video: 2
};

class ArticlePage extends Component {
  componentDidMount() {
    this.props.loadArticle(this.props.match.params.id);
  }

  _getInfoComponent(type) {
    switch (type) {
      case blockTypes.Text:
        return TextInformationBlock;
      case blockTypes.Image:
        return ImageInformationBlock;
      case blockTypes.Video:
        return VideoInformationBlock;
    }
  }

  _renderInfoBlock(data) {
    let Component = this._getInfoComponent(data.type);

    return <Component key={data.id} data={data}/>
  }

  render() {
    const { classes } = this.props;
    if (!this.props.article) return null;
    return (
      <div className={classes.container}>
        <Typography type='display2' className={classes.title}>
          <AlbumIcons/>
          {this.props.article.name}
        </Typography>

        <Divider/>

        <img src={this.props.article.imageUrl} className={classes.image}/>

        <Typography className={classes.title} type='body1'>
          {this.props.article.description}
        </Typography>

        {this.props.article.informationBlocks.map(block => this._renderInfoBlock(block))}

      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
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

export default withStyles(styles)(connect(mapStateToProps, { loadArticle })(ArticlePage));