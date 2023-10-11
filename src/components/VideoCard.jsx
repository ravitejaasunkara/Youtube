import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (

      <div className="p-2 m-2 w-64 shadow-lg rounded-lg">
        <img
          src={thumbnails?.medium?.url}
          alt="videocard"
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold py-2">{title.slice(0,50)}</li>
          <li>{channelTitle}</li>
          {statistics && <li>{statistics?.viewCount} views</li>}
        </ul>
      </div>
  );
};

export default VideoCard;
