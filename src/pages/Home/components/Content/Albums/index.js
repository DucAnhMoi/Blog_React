import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../../../../components/sliceRedux/homeSlice";
import { useEffect } from "react";
import AlbumItem from "./AlbumItem";
import { albumsSelector } from "../../../../../redux/selector";

const Albums = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);
  const albums = useSelector(albumsSelector);
  return (
    <div className="w-full">
      <h1 className="text-3xl mb-8 text-mainColor1 font-extrabold text-center">
        Albums
      </h1>
      <div className="flex">
        <div className="w-full">
          {albums.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
