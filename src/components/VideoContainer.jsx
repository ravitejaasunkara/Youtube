import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import CardsShimmer from "./CardsShimmer";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos.length > 0 ? (
    <div className="flex flex-wrap">
      {videos.map((item) => {
        return (
          <div className="flex" key={item?.id}>
            <Link to={`/watch?v=${item?.id}`}>
              <VideoCard info={item} key={item?.id} />
            </Link>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex flex-wrap">
      <CardsShimmer />
    </div>
  );
};

export default VideoContainer;
