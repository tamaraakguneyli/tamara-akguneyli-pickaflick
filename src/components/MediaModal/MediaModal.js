import React from "react";
import Modal from "react-modal";
import "./MediaModal.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function MediaModal({
  media,
  modalIsOpen,
  handleCloseModal,
  userId,
}) {
  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");

  const addToWatchlist = async () => {
    try {
      const response = await axios.post("http://localhost:8080/watchlist", {
        userId: userId,
        media: {
          title: media.title || media.name,
          overview: media.overview,
          release_date: media.release_date || media.first_air_date,
          poster_url: `https://image.tmdb.org/t/p/original${media.poster_path}`,
        },
      });
      handleCloseModal();
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

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
            src={`https://image.tmdb.org/t/p/original${
              media.poster_path || media.poster_url
            }`}
            alt={media.id}
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
            <button
              className={` ${
                isProfilePage
                  ? "modal__close modal__close--hide"
                  : "modal__close"
              }`}
              onClick={addToWatchlist}
            >
              Add To Watchlist
            </button>
            <button
              className={` ${
                isProfilePage
                  ? "modal__close"
                  : "modal__close modal__close--hide"
              }`}
            >
              Move to Watched
            </button>
            <button className="modal__close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
