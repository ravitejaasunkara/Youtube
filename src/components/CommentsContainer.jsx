import React, { useEffect } from "react";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_VIDEO_COMMENTS_API,
} from "../utils/constants";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md hover:bg-gray-300 rounded mt-2 p-2">
      <img
        className="w-10 h-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment?.replies}/>
        </div>
      </div>
    );
  });
};

const CommentsContainer = ({ videoId }) => {
  const commentsUrl =
    YOUTUBE_VIDEO_COMMENTS_API + videoId + "&key=" + YOUTUBE_API_KEY;
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(commentsUrl);
    const json = await data.json();
  };
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
