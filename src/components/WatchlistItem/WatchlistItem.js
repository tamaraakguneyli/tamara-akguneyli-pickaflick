import React from "react";
import "../MediaItem/MediaItem.scss";

export default function WatchlistItem({ onClick, poster, alt }) {
  return (
    <>
      <img
        onClick={onClick}
        src={poster}
        alt={alt}
        className="item item--top-media"
      />
    </>
  );
}
