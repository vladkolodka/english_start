import React from 'react';

const VideoInformationBlock = (data) => <div>
  <iframe width="700" height="600" src={data.url}/>
</div>;

export default VideoInformationBlock;