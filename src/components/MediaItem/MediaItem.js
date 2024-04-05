import React from "react";
import "./MediaItem.scss";

export default function MediaItem({ poster, onClick }) {
  return (
    <img
      onClick={onClick}
      src={`https://image.tmdb.org/t/p/original${poster}`}
      alt="'"
      className="item item--top-media"
    />
  );
}
