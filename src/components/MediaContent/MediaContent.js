import React, { useState } from "react";
import "./MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";
import nextIcon from "../../assets/images/icons/next-icon.png";
import MediaModal from "../MediaModal/MediaModal.js";

export default function MediaContent({ media }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleOpenModal = (eachMedia) => {
    setSelectedMedia(eachMedia);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  return (
    <>
      <section className="content">
        <div className="content__wrapper">
          {media &&
            media.map((item) => (
              <MediaItem
                key={item.id}
                poster={item.poster_path}
                onClick={() => handleOpenModal(item)}
              />
            ))}
        </div>
        <img className="content__icon" src={nextIcon} alt="coral next icon" />
      </section>
      {selectedMedia && (
        <MediaModal
          media={selectedMedia}
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
