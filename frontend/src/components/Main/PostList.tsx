import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

export interface PostInterface {
  board_id: number;
  writer: string;
  title: string;
  content: string;
  img: string;
  date: string;
}

const PostList = () => {
  const [postList, setPostList] = useState<PostInterface[]>();

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = () => {
    const url = "";
    axios.get(url).then((res) => {
      setPostList(res.data);
    });
  };
  return (
    <div>
      {postList ? (
        postList.map((item, index) => (
          <Post key={index} data={item} index={index} />
        ))
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </div>
  );
};

export default PostList;
