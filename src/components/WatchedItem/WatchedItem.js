import React from "react";
import "../MediaItem/MediaItem.scss";

export default function WatchedItem({ onClick, poster, key }) {
  return (
    <img
      onClick={onClick}
      src={poster}
      alt={key}
      className="item item--top-media"
    />
  );
}
