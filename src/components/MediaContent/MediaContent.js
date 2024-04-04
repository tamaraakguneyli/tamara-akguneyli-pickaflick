import React from "react";
import "./MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";
import nextIcon from "../../assets/images/icons/next-icon.png";

export default function MediaContent({ media }) {
  return (
    <section className="content">
      {media &&
        media.map((item) => (
          <MediaItem key={item.id} poster={item.poster_path} />
        ))}
      <img className="content__icon" src={nextIcon} alt="coral next icon" />
    </section>
  );
  {
  }
}
