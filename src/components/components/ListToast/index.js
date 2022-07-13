// import library
import React, { useEffect, useCallback } from "react";
import className from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
// import from file
import ToastMessage from "../ToastMessage";
import styles from "./ListToast.module.scss";
import { toastMessageSelector } from "../../../redux/selector";
import toastMessageSlice from "../../sliceRedux/toastMessageSlice";

const cx = className.bind(styles);

const ListToast = () => {
  // Get state and dispatch action from redux store
  const dispatch = useDispatch();
  const listToast = useSelector(toastMessageSelector);
  const handleDelete = useCallback(
    (e, id) => {
      dispatch(toastMessageSlice.actions.deleteToast(id));
      e.stopPropagation();
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
        dispatch(
          toastMessageSlice.actions.deleteToast(
            listToast[listToast.length - 1].id
          )
        );
      }
    }, 3000);

    return () => {
      clearTimeout(setTimeoutt);
    };
  }, [listToast, dispatch]);
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
