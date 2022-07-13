import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import CommentItem from "./CommentItem";
import { commentsSelector } from "../../../../../redux/selector";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  console.log("render");
  const comments = useSelector(commentsSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Comments
      </h1>
      <div className="flex">
        <div className="w-full">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
