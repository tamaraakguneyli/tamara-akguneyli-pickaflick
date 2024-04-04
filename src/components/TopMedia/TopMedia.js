import React from "react";
import "../MediaContent/MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";

export default function TopMedia({ media }) {
  return (
    <section className="content content--top-media">
      <div className="content__wrapper">
        {media &&
          media.map((item) => (
            <MediaItem key={item.id} poster={item.poster_path} />
          ))}
      </div>
    </section>
  );
  {
  }
}
