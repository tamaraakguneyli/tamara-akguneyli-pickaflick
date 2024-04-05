import React from "react";
import "./MediaItem.scss";

export default function MediaItem({ poster, onClick }) {
  return (
    <img
      onClick={onClick}
      src={`https://image.tmdb.org/t/p/original${poster}`}
      alt="video poster"
      className="item item--top-media"
    />
  );
}
