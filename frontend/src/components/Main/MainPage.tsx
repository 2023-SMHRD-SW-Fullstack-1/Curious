import React from "react";
import PostList from "./PostList";
import Search from "./Search";
import Category from "./Category";
import Order from "./Order";

const MainPage = () => {
  return (
    <div>
      <Category />
      <Search />
      <Order />
      <PostList />
    </div>
  );
};

export default MainPage;
