import { createActions } from "reduxsauce";
import videosData from "../data/videos";

export const { Types, Creators } = createActions({
    resetVideos: null,
    setVideos: ['videos'],
    setVideo: ['video']
});

export const loadLatestVideos = () => (dispatch) => {

    dispatch(Creators.setVideos(videosData));
};

export const loadVideo = (id) => (dispatch) => {
    dispatch(Creators.setVideo(videosData.filter(v => v.id == id)[0]));
};