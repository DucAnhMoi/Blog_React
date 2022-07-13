import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import PhotoItem from "./PhotoItem";
import { photosSelector } from "../../../../../redux/selector";

const Photos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  const photos = useSelector(photosSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Photos
      </h1>
      <div className="flex">
        <div className="w-full">
          {photos.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
