import React from "react";
import GridProduct from "../components/GridProduct";
import { FaRegWindowMinimize } from "react-icons/fa";

function HomeGridFavourite() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-1 text-4xl">
            <span>Here is People's</span>
            <span className="text-[#8E6447]">Favorite</span>
          </div>
          <div className="text-orange-400 text-4xl">
            <FaRegWindowMinimize />
          </div>
          <div className="text-[12px] text-[#4F5665]">
            Let's choose and have a bit taste of poeple's favorite. It might be
            yours too!
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <GridProduct />
        <GridProduct />
        <GridProduct />
        <GridProduct />
      </div>
    </div>
  );
}

export default HomeGridFavourite;