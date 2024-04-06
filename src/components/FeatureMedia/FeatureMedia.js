import React from "react";
import "./FeatureMedia.scss";

export default function FeatureMedia() {
  return (
    <>
      <div className="media">
        <img className="media_img" src="" alt="media poster" />
        <div className="media__text">
          <h1 className="media__title">media title</h1>
          <p className="media__overview">media overview</p>
          <p className="media__date">media release date</p>
        </div>
      </div>
    </>
  );
}
