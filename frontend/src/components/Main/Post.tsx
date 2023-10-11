import React from "react";
import { PostInterface } from "./PostList";

const Post = ({ data, index }: { data: PostInterface; index: number }) => {
  return (
    <div>
      <div>{data.img}</div>
      <div>{data.title}</div>
      <div>{data.writer}</div>
      <div>{data.date}</div>
    </div>
  );
};

export default Post;
