import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class Video extends Component {
  constructor(props) {
    super(props);

    this.onLearnClick = this.onLearnClick.bind(this);
  }

  onLearnClick() {
    this.props.history.push(`/video/${this.props.video.id}`);
  }

  render() {
    const {classes, video} = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={video.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {video.title}
          </Typography>
          <Typography component="p">
            {video.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" onClick={this.onLearnClick}>
            Watch
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const styles = {
  card: {
    // maxWidth: 345,
    marginBottom: 15
  },
  media: {
    height: 200,
  },
};

export default withRouter(withStyles(styles)(Video));