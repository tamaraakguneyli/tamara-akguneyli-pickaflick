import React from "react";
import "./MediaDetails.scss";
import FeatureMedia from "../FeatureMedia/FeatureMedia";
import FeatureComments from "../FeatureComments/FeatureComments";

export default function MediaDetails({ type }) {
  return (
    <section className="media-feature">
      {type === "media" ? (
        <article className="media-feature__block">
          <FeatureMedia />
        </article>
      ) : type === "comments" ? (
        <article className="media-feature__block">
          <FeatureComments />
        </article>
      ) : null}
    </section>
  );
}
