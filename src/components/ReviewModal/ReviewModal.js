import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ReviewModal.scss";

export default function ReviewModal({
  media,
  modalIsOpen,
  handleCloseModal,
  userId,
  inHomePage,
}) {
  const [reviewList, setReviewList] = useState([]);
  const [newReviewText, setNewReviewText] = useState("");

  const fetchReviews = async () => {
    try {
      let request = "";

      if (inHomePage) {
        request = `http://localhost:8080/reviews/${media.id}?api_id=${media.id}`;
      } else {
        request = `http://localhost:8080/reviews/${media.id}`;
      }

      const response = await axios.get(request);
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
      const response = await axios.put("http://localhost:8080/reviews", {
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

  const deleteReview = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/reviews", {
        mediaitem_id: media.id,
        user_id: userId,
        review: newReviewText,
      });
      console.log("Review deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting review", error);
    }
  };

  // const filteredReviews = reviewList.filter((review) => {
  //   return review.api_id === media.id;
  // });

  const hasSubmittedReview = reviewList.some(
    (review) => review.review !== null && review.review !== undefined
  );

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
            <div className="modal__reviews-list"></div>
            {reviewList.map((review) => (
              <p key={review.id} className="modal__review">
                {review.review}
              </p>
            ))}
            {!inHomePage && (
              <form onSubmit={handleSubmit} className="form">
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Write your review here..."
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  className="form__textarea"
                />
                {!hasSubmittedReview && (
                  <button type="submit" className="modal__close ">
                    Post my Review
                  </button>
                )}
                {hasSubmittedReview && (
                  <>
                    <button type="submit" className="modal__close">
                      Edit my Review
                    </button>
                    <button
                      type="button"
                      className="modal__close modal__close--reviews"
                      onClick={deleteReview}
                    >
                      Delete my Review
                    </button>
                  </>
                )}
              </form>
            )}
            <button
              type="button"
              className="modal__close"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
