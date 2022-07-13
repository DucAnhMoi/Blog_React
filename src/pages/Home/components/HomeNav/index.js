import React from "react";
import ButtonLine from "../../../../components/components/ButtonLine";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="w-full mt-8 mb-4 rounded-3xl">
      <div className="my-2 p-4 flex">
        <ButtonLine>
          <Link className="mx-2" to="/">
            POSTS
          </Link>
        </ButtonLine>
        <ButtonLine>
          <Link className="mx-2" to="/Home/Comments">
            COMMENTS
          </Link>
        </ButtonLine>
        <ButtonLine>
          <Link className="mx-2" to="/Home/Albums">
            ALBUMS
          </Link>
        </ButtonLine>
        <ButtonLine>
          <Link className="mx-2" to="/Home/Photos">
            PHOTOS
          </Link>
        </ButtonLine>
        <ButtonLine>
          <Link className="mx-2" to="/Home/Todos">
            TODOS
          </Link>
        </ButtonLine>
        <ButtonLine>
          <Link className="mx-2" to="/Home/Users">
            USERS
          </Link>
        </ButtonLine>
      </div>
    </div>
  );
};

export default HomeNav;
