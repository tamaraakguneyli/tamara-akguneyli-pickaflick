import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../MediaContent/MediaContent.scss";
import nextIcon from "../../assets/images/icons/next-icon.png";
import MediaModal from "../MediaModal/MediaModal.js";
import WatchedItem from "../WatchedItem/WatchedItem.js";

export default function Watched() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");

  const handleOpenModal = () => {
    setSelectedMedia();
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  return (
    <>
      <section
        className={` ${isProfilePage ? "content content--profile" : "content"}`}
      >
        <div className="content__wrapper"></div>
        <WatchedItem />
        <img
          className={` ${
            isProfilePage
              ? "content__icon content__icon--profile"
              : "content__icon"
          }`}
          src={nextIcon}
          alt="coral next icon"
        />
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
