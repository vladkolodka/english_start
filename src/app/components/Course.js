import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class Course extends Component {
  toggleAssignment = () => {
    if(!this.props.course.isAdded) this.props.setAssignment(this.props.course.id, !this.props.course.isAdded);
    else alert('Course cannot be removed!');
  };

  toggleStudiedStatus = () => {
    this.props.setStudied(this.props.course.id, !this.props.course.isStudied);
  };

  onOpen = () => {
    this.props.onOpen(this.props.course.id);
  };

  render() {
    const { classes, course } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={course.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {course.name}
          </Typography>
          <Typography component="p">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" onClick={this.onOpen}>
            Open
          </Button>

          <Button dense color="accent" onClick={this.toggleAssignment}>
            {course.isAdded ? 'Remove' : 'Add to my courses'}
          </Button>

          {course.isAdded &&
          <Button dense color="default" onClick={this.toggleStudiedStatus}>
            {course.isStudied ? 'Mark as not studied' : 'Mark as studied'}
          </Button>
          }

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

export default withStyles(styles)(Course);