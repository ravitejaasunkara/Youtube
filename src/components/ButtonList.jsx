import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../utils/videoCategorySlice";
import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const buttonArr = [
    {
      category:"Music",
      id:10
    },
    {
      category:"Sports",
      id:17
    },
    {
      category:"Entertainment",
      id:24
    },
    {
      category:"News",
      id:25
    },
    {
      category:"Movies",
      id:30
    },
    {
      category:"Trailers",
      id:44
    },
    {
      category:"Pets",
      id:15
    },
    {
      category:"Gaming",
      id:20
    },
    {
      category:"Education",
      id:27
    },
    {
      category:"Science",
      id:28
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonHandler = (id,category) => {
    dispatch(setCategoryId(id));
    navigate("/results?videoCategoryId="+id+'&videoType='+category);
  }
  return (
    <div>
      {buttonArr.map((item,index) => {
        return <Button name={item?.category} key={item?.id} onClick={() => buttonHandler(item?.id,item?.category)}/>
      })}
    </div>
  );
};

export default ButtonList;
