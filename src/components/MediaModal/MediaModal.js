import React from "react";
import Modal from "react-modal";
import "./MediaModal.scss";

export default function MediaModal({ media, modalIsOpen, handleCloseModal }) {
  console.log("Media:", media);
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel="Media Modal"
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="Overlay"
    >
      {media && (
        <div className="modal__content">
          <img
            src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
            alt={media.title}
            className="modal__poster"
          />
          <div className="modal__container">
            <h2 className="modal__title">
              {media.title}
              {media.name}
            </h2>
            <p className="modal__overview">{media.overview}</p>
            <p className="modal__overview">
              Release Date: {media.release_date} {media.first_air_date}
            </p>
          </div>
          <div className="modal__footer">
            <button className="modal__close">Add To Watchlist</button>
            <button className="modal__close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
