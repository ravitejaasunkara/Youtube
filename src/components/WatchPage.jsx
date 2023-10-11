import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appNavSlice";
import {
  YOUTUBE_CHANNEL_DATA_API,
  YOUTUBE_VIDEO_URL,
} from "../utils/constants";
import { YOUTUBE_API_KEY } from "./../utils/constants";
import LiveChat from "./LiveChat";

const VideoTitle = ({ title }) => {
  return <p className="font-bold text-xl p-2 m-2 shadow-lg">{title}</p>;
};

const ChannelDetails = ({ channelName, channelImage, subscriberCount }) => {
  return (
    <div className="flex p-2 m-2 shadow-lg justify-between">
      <div className="flex m-2 justify-center">
        <img
          className="w-10 h-10 rounded-full border border-gray-400"
          src={channelImage}
          alt="user-icon"
        />
        <div className="flex flex-col mx-3">
          <p className="font-bold">{channelName}</p>
          <p>{subscriberCount} subscribers</p>
        </div>
      </div>
      <button className="rounded-3xl bg-gray-200 h-10 w-24 hover:bg-gray-300">
        Subscribe
      </button>
    </div>
  );
};

const VideoDetails = ({ viewsCount, datePublished, description }) => {
  const date = new Date(datePublished).toDateString();
  const [show, setShow] = useState(true);
  return (
    <div className="p-2 m-2 shadow-lg bg-gray-200">
      <div className="flex">
        <p className="mx-2 font-bold">{viewsCount} Views</p>
        <p className="mx-2 font-bold">{date}</p>
      </div>
      <p className="m-2">
        {show ? description?.slice(0, 200) + "....." : description}
      </p>
      <button
        className="m-2 font-bold underline"
        onClick={() => setShow(!show)}
      >
        {show ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div
      className="bg-gray-300 p-2 m-2 animate-pulse"
      style={{ width: "1000px", height: "500px" }}
    >
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
      <div className="h-5 m-5 mx-2 my-5 rounded bg-gray-400 animate-pulse"></div>
    </div>
  );
};

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = params.get("v");
  const [videoData, setVideoData] = useState([]);
  const [channelId, setChannelId] = useState("");
  const [channelData, setChannelData] = useState([]);
  const videoUrl = YOUTUBE_VIDEO_URL + videoId + "&key=" + YOUTUBE_API_KEY;

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
    return () => {
      dispatch(toggleMenu())
    }
  }, []);

  const getVideoData = async () => {
    const data = await fetch(videoUrl);
    const json = await data.json();
    setVideoData(json?.items);
    const channelIdFromData = json?.items[0]?.snippet?.channelId;
    setChannelId(channelIdFromData);
    await getChannelData(channelIdFromData);
  };

  const getChannelData = async (channelId) => {
    let channelUrl =
      YOUTUBE_CHANNEL_DATA_API + channelId + "&key=" + YOUTUBE_API_KEY;
    const data = await fetch(channelUrl);
    const json = await data.json();
    setChannelData(json?.items);
  };

  //  Add autoplay=1 to src to autoplay the video when opened
  if(!(videoData.length > 0)){
    return <Shimmer />
  }
  return (
    <div className="flex flex-col">
      <div className="px-5 flex">
          <div className="p-2">
            <iframe
              className="rounded-lg"
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="w-3/4">
        {videoData.length > 0 && (
          <VideoTitle title={videoData[0]?.snippet?.title} />
        )}
        <ChannelDetails
          channelName={channelData[0]?.snippet?.title}
          channelImage={channelData[0]?.snippet?.thumbnails?.default?.url}
          subscriberCount={channelData[0]?.statistics?.subscriberCount}
        />
        <VideoDetails
          viewsCount={videoData[0]?.statistics?.viewCount}
          datePublished={videoData[0]?.snippet?.publishedAt}
          description={videoData[0]?.snippet?.description}
        />
      </div>

      {/* <CommentsContainer videoId={videoId} /> */}
    </div>
  );
};

export default WatchPage;
