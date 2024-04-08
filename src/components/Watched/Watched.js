import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../MediaContent/MediaContent.scss";
import nextIcon from "../../assets/images/icons/next-icon.png";
import MediaModal from "../MediaModal/MediaModal.js";
import WatchedItem from "../WatchedItem/WatchedItem.js";
import axios from "axios";

const Watched = ({ userId }) => {
  const [watched, setWatched] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");

  const handleOpenModal = (media) => {
    setSelectedMedia(media);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  useEffect(() => {
    const fetchWatched = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/watched/${userId}`
        );
        setWatched(response.data);
      } catch (error) {
        console.error("Error fetching watched section", error);
      }
    };

    fetchWatched();
  }, [userId]);

  const updatedWatched = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/watched/${userId}`
      );
      setWatched(response.data);
    } catch (error) {
      console.error("Error updating watched", error);
    }
    // handleCloseModal();
  };

  return (
    <>
      <section
        className={` ${isProfilePage ? "content content--profile" : "content"}`}
      >
        <div className="content__wrapper">
          {watched &&
            watched.map((media) => (
              <WatchedItem
                key={media.id}
                alt={media.id}
                poster={media.poster_url}
                title={media.title}
                overview={media.overview}
                onClick={() => handleOpenModal(media)}
              />
            ))}
        </div>
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
          updatedWatched={updatedWatched}
          userId={userId}
          test={watched}
        />
      )}
    </>
  );
};

export default Watched;
