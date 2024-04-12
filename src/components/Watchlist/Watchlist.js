import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../MediaContent/MediaContent.scss";
import nextIcon from "../../assets/images/icons/next-icon.png";
import MediaModal from "../MediaModal/MediaModal.js";
import WatchlistItem from "../WatchlistItem/WatchlistItem.js";
import axios from "axios";

const Watchlist = ({ userId, setUpdateLists, updateLists }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");

  const handleOpenModal = (media) => {
    setSelectedMedia(media);
    setUpdateLists(false);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/watchlist/${userId}`
        );
        setWatchlist(response.data);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };
    fetchWatchlist();
  }, [userId, updateLists]);

  return (
    <>
      <section
        className={` ${isProfilePage ? "content content--profile" : "content"}`}
      >
        <div className="content__wrapper">
          {watchlist &&
            watchlist.map((media) => (
              <WatchlistItem
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
          userId={userId}
          inWatchlist={true}
          inWatched={false}
          setUpdateLists={setUpdateLists}
        />
      )}
    </>
  );
};

export default Watchlist;
