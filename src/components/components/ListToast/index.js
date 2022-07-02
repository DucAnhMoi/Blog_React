// import library
import React, { useEffect, useCallback } from "react";
import className from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
// import from file
import ToastMessage from "../ToastMessage";
import styles from "./ListToast.module.scss";
import { toastMessageState } from "../../../redux/selector";
import { deleteToast } from "../../../redux/action";

const cx = className.bind(styles);

const ListToast = () => {
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const listToast = useSelector(toastMessageState);
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteToast(id));
    },
    [dispatch]
  );
  // auto delete toast
  useEffect(() => {
    // const interval = setInterval(() => {
    //   if (listToast.length) {
    //     handleDelete(listToast[0].id);
    //   }
    // }, 3000);

    // return () => {
    //   clearInterval(interval);
    // };
    const setTimeoutt = setTimeout(() => {
      if (listToast.length) {
        handleDelete(listToast[0].id);
      }
    }, 3000);

    return () => {
      clearTimeout(setTimeoutt);
    };
  }, [listToast, handleDelete]);
  // UI
  return (
    <div className={cx("toast-list")}>
      {listToast.map((item) => (
        <ToastMessage
          key={item.id}
          id={item.id}
          title={item.title}
          message={item.message}
          duration={item.duration}
          type={item.type}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ListToast;
