import React from "react";
import "./HomePage.scss";
import MediaContent from "../../components/MediaContent/MediaContent";
import starIcon from "../../assets/images/icons/star-icon.png";

export default function HomePage() {
  return (
    <main>
      <div className="home-layout">
        <div className="home-layout__header">
          <h1 className="home-layout__title">Movies</h1>
          <img
            src={starIcon}
            alt="coral star icon"
            className="home-layout__icon"
          />
        </div>
        <MediaContent />
        <div className="home-layout__header">
          <h1 className="home-layout__title">Series</h1>
          <img
            src={starIcon}
            alt="coral star icon"
            className="home-layout__icon"
          />
        </div>
        <MediaContent />
      </div>
    </main>
  );
}
