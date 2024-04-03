import React from "react";
import "./MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";
import nextIcon from "../../assets/images/icons/next-icon.png";

export default function MediaContent() {
  return (
    <section className="content">
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <img className="content__icon" src={nextIcon} alt="coral next icon" />
    </section>
  );
}
