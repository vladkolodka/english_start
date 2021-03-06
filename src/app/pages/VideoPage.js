import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadVideo } from "../actions/videoActions";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import AlbumIcons from "material-ui-icons/Album";
import { withStyles } from "material-ui/styles";

class VideoPage extends Component {
  constructor(props) {
    super(props);

    this.props.loadVideo(parseInt(props.match.params.id));
  }

    render() {
        const { classes } = this.props;
        if (!this.props.video)
            return null;
        return (
            <div align="center" className={classes.container}>
                <Typography type='display2' className={classes.title}>
                    <AlbumIcons />
                    {this.props.video.title}
                </Typography>

                <Divider />
                
                <iframe width="700" height="600" src={this.props.video.videoUrl}/>

                <Typography className={classes.title} type='body1'>
                    {this.props.video.description}
                </Typography>
            </div>
        );
    }
}

const mapStateToProps = ({videos}) => ({
  video: videos.item
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
    }
};

export default withStyles(styles)(connect(mapStateToProps, {loadVideo})(VideoPage));