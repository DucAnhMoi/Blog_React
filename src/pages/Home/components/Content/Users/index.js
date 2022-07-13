import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import UserItem from "./UserItem";
import { usersSelector } from "../../../../../redux/selector";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector(usersSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Users
      </h1>
      <div className="flex">
        <div className="w-full">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
