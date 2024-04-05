import React from "react";
import "./MediaModal.scss";
import Modal from "react-modal";

export default function MediaModal({ poster, modalIsOpen, handleCloseModal }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        className="modal"
        overlayClassName="Overlay"
      >
        <div className="modal__icon">
          <img
            onClick={handleCloseModal}
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt=""
            className="modal__close"
          />
        </div>
        <div className="modal__container">
          <div className="modal__wrap">
            <h3 className="modal__title">Delete</h3>
          </div>
          <div className="modal__btn">
            <button className="modal__cancel" onClick={handleCloseModal}>
              cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
