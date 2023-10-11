import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appNavSlice";

import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import { setSearchKeyword } from "../utils/searchKeywordSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocussed, setIsFocussed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const onClose = (e) => {
    if((modalRef?.current?.contains(e.target))){
      setIsFocussed(true);
    }else if((inputRef?.current?.contains(e.target))){
      setIsFocussed(true);
    }else{
      setIsFocussed(false);
    }
  }
  const modalRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    document.addEventListener("click", onClose);
    return () => document.addEventListener("click", onClose);
  },[]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearchTerm = (s) => {
    setIsFocussed(false);
    setSearchTerm(s);
    dispatch(setSearchKeyword(s));
    //dispatch(toggleMenu())
    navigate("/results?search_query=" + s);
  };

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg items-center">
      <div className="flex col-span-1 justify-center items-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAXVBMVEX///8AAAAiICHc3Ny0tLQfHR4wLy8kHyHX19cGAAD09PT7+/teXV0cGhv39/e5ubnIyMjR0NFTUlLq6eqXl5d6enqqqani4uJAQEAOCQoTEBJxcHEhGx44Njc8Ozxx4GU2AAABCElEQVR4nO3a2W7CMBCF4XggTbOYpQHCVt7/MQlgKgoSwtOJ5KL/u7JGUXTkOBceO8sAAAAAAACAN1NNx+ZmmiBzN4SvNn5Gmq0MoFxEJ2kPXooBkiyjk9Q7l+/3uTHvVtFJsrb5sPe9mMQnyeqRvU6RAwAAAACsVaNPc12tCNKtT3v7sgyb/POgvKnoCssqOsik2RQXIneDh0LxckGcolew9s9fK6EgMZE0vYJ+Ts5thiL0Li6ve1aQm8Ldo9eC5Io5CeskfOlfg78UFOskoX8HAAAAAIwlczaazHlxvXPeWx+hq87Q20OfI4l7BVWz+dnhWyZR9AqSuX+S0J0cAAAAAAAA4D84ArNKIK2X3dNKAAAAAElFTkSuQmCC"
          alt="menu"
          className="h-8 cursor-pointer mx-3"
          onClick={toggleSidebar}
        />
        <Link to={"/"}>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
            alt="youtube-logo"
            className="h-14"
          />
        </Link>
      </div>
      <div className="flex flex-col col-span-10">
        <div className="justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="h-8 w-1/2 border border-gray-400 rounded rounded-l-full p-2"
            onChange={(e) => {
              setSearchQuery(e?.target?.value);
              setSearchTerm(e?.target?.value);
              setIsFocussed(true)
            }}
            value={searchTerm}
            onFocus={() => setIsFocussed(true)}
            ref={inputRef}
          >
            
          </input>
          <button className="border border-gray-400 bg-gray-100 rounded h-8 rounded-r-full w-16">
            Search
          </button>
        </div>

        {suggestions.length > 0 && isFocussed && (
          <div className="overflow-scroll h-96 fixed py-2 px-5 mt-10 bg-white w-[32rem] shadow-lg rounded-lg border border-gray-300"
          ref={modalRef}
          >
            <ul>
              {suggestions.map((s, index) => (
                <li
                  className="shadow-lg px-5 py-2 hover:bg-gray-200"
                  key={index}
                  onClick={() => handleSearchTerm(s)}
                >
                  <button>🔍 {s}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
          alt="user-icon"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Header;
