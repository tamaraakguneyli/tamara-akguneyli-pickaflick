import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ReviewModal.scss";

export default function ReviewModal({
  media,
  modalIsOpen,
  handleCloseModal,
  userId,
}) {
  const [reviewList, setReviewList] = useState([]);
  const [newReviewText, setNewReviewText] = useState("");

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/reviews/${media.id}`
      );
      setReviewList(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    if (modalIsOpen && media && media.id) {
      fetchReviews();
    }
  }, [modalIsOpen, media]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/reviews", {
        mediaitem_id: media.id,
        user_id: userId,
        review: newReviewText,
      });

      console.log("Review submitted successfully:", response.data);

      fetchReviews();

      setNewReviewText("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel="Review Modal"
      onRequestClose={handleCloseModal}
      className="modal modal--reviews"
      overlayClassName="Overlay Overlay--reviews"
    >
      {media && (
        <div className="modal__content">
          <div className="modal__container">
            <h2 className="modal__title">
              {media.title || media.name} Reviews
            </h2>
            {reviewList.length > 0 ? (
              <div className="modal__reviews-list">
                {reviewList.map((review) => (
                  <p key={review.id} className="modal__review">
                    {review.review}
                  </p>
                ))}
              </div>
            ) : (
              <p>No reviews yet</p>
            )}
            <form onSubmit={handleSubmit} className="form">
              <textarea
                rows="4"
                cols="50"
                placeholder="Write your review here..."
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
              />
              <button
                type="submit"
                className="modal__close modal__close--reviews"
              >
                Post my Review
              </button>
              <button
                type="button"
                className="modal__close"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </Modal>
  );
}
