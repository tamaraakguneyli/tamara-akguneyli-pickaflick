import React from "react";
import "./MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";

export default function MediaContent() {
  return (
    <section className="content">
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
    </section>
  );
}
