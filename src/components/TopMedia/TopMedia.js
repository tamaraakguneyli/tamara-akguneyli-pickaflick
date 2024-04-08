import React, { useState } from "react";
import "../MediaContent/MediaContent.scss";
import MediaItem from "../MediaItem/MediaItem";
import MediaModal from "../MediaModal/MediaModal";

export default function TopMedia({ media, user }) {
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
    <section className="content content--top-media">
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
      {selectedMedia && (
        <MediaModal
          media={selectedMedia}
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
          userId={user.id}
        />
      )}
    </section>
  );
}
