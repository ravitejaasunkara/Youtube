import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { toggleMenu } from "../utils/appNavSlice";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_SEARCH_BY_CATEGORY_ID,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../utils/constants";
import CardsShimmer from "./CardsShimmer";
import VideoCard from "./VideoCard";


const SearchResults = () => {
  const { searchTerm } = useSelector((store) => store.searchTerm);
  const [searchApiResult, setSearchApiResult] = useState([]);
  const [categorySearchResult, setCategorySearchResult] = useState([]);
  const [isCategory, setIsCategory] = useState(false);
  const [params] = useSearchParams();
  const categoryId = params.get("videoCategoryId");
  const searchKeyword = useSelector((store) => store.searchTerm);
  const dispatch = useDispatch();


  useEffect(() => {
    if (categoryId > 0) {
      getVideosByCategoryId();
    } else {
      getVideosBySearchTerm();
    }
    dispatch(toggleMenu());
  }, [searchTerm]);

  const getVideosBySearchTerm = async () => {
    const data = await fetch(
      `${YOUTUBE_SEARCH_RESULTS_API}${searchTerm}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    setSearchApiResult(json?.items);
  };

  const getVideosByCategoryId = async () => {
    let videoUrl =
      YOUTUBE_SEARCH_BY_CATEGORY_ID + categoryId + "&key=" + YOUTUBE_API_KEY;
    const data = await fetch(videoUrl);
    const json = await data.json();
    setSearchApiResult(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {searchApiResult.length > 0 ? (
        searchApiResult.map((item) => (
          <div className="flex" key={item?.id?.videoId}>
            <Link to={`/watch?v=${item?.id?.videoId}`}>
              <VideoCard info={item} />
            </Link>
          </div>
        ))
      ) : (
        <CardsShimmer />
      )}
    </div>
  );
};

export default SearchResults;
