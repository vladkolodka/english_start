import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadLatestVideos } from "../actions/videoActions";

import Video from "../components/Video";

class VideosPage extends Component {
  constructor(props) {
    super(props);

    this.props.loadLatestVideos();
  }

  render() {
    return (
      <div>
        {this.props.videos.map(item => <Video key={item.id} video={item}/>)}
      </div>
    );
  }
}

const mapStateToProps = ({videos}) => ({
  videos: videos.items
});

export default connect(mapStateToProps, {
  loadLatestVideos
})(VideosPage);