import React from "react";
import "./MediaItem.scss";

export default function MediaItem({ poster }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt="video poster"
        className="item item--top-media"
      ></img>
    </>
  );
}
