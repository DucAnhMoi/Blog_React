import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import PostItem from "./PostItem";
import { postsSelector } from "../../../../../redux/selector";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector(postsSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Posts
      </h1>
      <div className="flex">
        <div className="w-full">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
