import React, { useState } from "react";
import Modal from "react-modal";
import "./MediaModal.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReviewModal from "../ReviewModal/ReviewModal";

export default function MediaModal({
  media,
  modalIsOpen,
  handleCloseModal,
  userId,
  inWatchlist,
  inHomePage,
  setUpdateLists,
}) {
  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [watchlistMessage, setWatchlistMessage] = useState(false);
  const [watchedMessage, setWatchedMessage] = useState(false);
  const [error, setError] = useState(null);

  const formattedReleaseDate = new Date(
    media.release_date || media.first_air_date
  ).toLocaleDateString();

  const addToWatchlist = async () => {
    try {
      const response = await axios.post("http://localhost:8080/watchlist", {
        userId: userId,
        media: {
          title: media.title || media.name,
          overview: media.overview,
          release_date: media.release_date || media.first_air_date,
          poster_url: `https://image.tmdb.org/t/p/original${media.poster_path}`,
          api_id: media.id,
        },
      });
      setWatchlistMessage(true);
      setTimeout(() => {
        handleCloseModal();
      }, 1500);

      console.log("Media added to watchlist", response.data);
    } catch (error) {
      console.error("Error adding to watchlist", error);
      setError(error.response.data);
    }
  };

  const removeFromWatchlist = async (mediaitemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/watchlist/${mediaitemId}`
      );
      console.log("Media removed from watchlist:", response.data);
    } catch (error) {
      console.error("Error removing from watchlist:", error);
    }
  };

  const handleRemoveFromWatchlist = () => {
    if (media && media.id) {
      removeFromWatchlist(media.id);
      handleCloseModal();
    }
  };

  const addToWatched = async (mediaitemId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/watched/${mediaitemId}`
      );
      console.log("Media moved to watched section", response.data);
    } catch (error) {
      console.error("Unable to add to watched section", error);
    }
  };

  const handleMoveToWatched = () => {
    if (media && media.id) {
      addToWatched(media.id);
      setWatchedMessage(true);

      setTimeout(() => {
        handleCloseModal();
        setUpdateLists(true);
      }, 1500);
    }
  };

  const openReviewModal = () => {
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setShowReviewModal(false);
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
            {isProfilePage && (
              <p className="modal__overview">
                Release Date: {formattedReleaseDate}
              </p>
            )}
            {!isProfilePage && (
              <p className="modal__overview">
                Release Date: {media.release_date} {media.first_air_date}
              </p>
            )}
          </div>
          <div className="modal__footer">
            {watchlistMessage && (
              <p className="modal__added-watchlist">
                {media.title}
                {media.name} {""} has now been added to your watchlist!
              </p>
            )}
            {error && (
              <p className="modal__added-watchlist">
                {media.title}
                {media.name} {""}
                {error}
              </p>
            )}
            <button
              className={` ${
                isProfilePage
                  ? "modal__close modal__close--hide"
                  : "modal__close modal__close--home"
              }`}
              onClick={addToWatchlist}
            >
              Add To Watchlist
            </button>
            {watchedMessage && (
              <p className="modal__added-watchlist">
                {media.title}
                {media.name} {""} has now been moved to watched!
              </p>
            )}
            {inWatchlist && (
              <button
                className={` ${
                  isProfilePage
                    ? "modal__close"
                    : "modal__close modal__close--hide"
                }`}
                onClick={handleMoveToWatched}
              >
                Move to Watched
              </button>
            )}
            {inHomePage && (
              <button
                className={` ${
                  isProfilePage
                    ? "modal__close modal__close--hide"
                    : "modal__close "
                }`}
                onClick={openReviewModal}
              >
                View Reviews
              </button>
            )}
            {!inWatchlist && (
              <button
                className={` ${
                  isProfilePage
                    ? "modal__close"
                    : "modal__close modal__close--hide"
                }`}
                onClick={openReviewModal}
              >
                Add/Edit my Review
              </button>
            )}
            <button
              className={` ${
                isProfilePage
                  ? "modal__close modal__close--remove"
                  : "modal__close modal__close--hide"
              }`}
              onClick={handleRemoveFromWatchlist}
            >
              Remove {media.title} from my profile
            </button>
            <button className="modal__close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
      {showReviewModal && (
        <ReviewModal
          media={media}
          modalIsOpen={showReviewModal}
          handleCloseModal={closeReviewModal}
          userId={userId}
          inHomePage={inHomePage}
        />
      )}
    </Modal>
  );
}
