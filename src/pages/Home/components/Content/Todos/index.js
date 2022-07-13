import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import TodoItem from "./TodoItem";
import { todosSelector } from "../../../../../redux/selector";

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const todos = useSelector(todosSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Todos
      </h1>
      <div className="flex">
        <div className="w-full">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
