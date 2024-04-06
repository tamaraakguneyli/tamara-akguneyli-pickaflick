import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import starIcon from "../../assets/images/icons/star-icon.png";
import MediaContent from "../../components/MediaContent/MediaContent";
import MediaDetails from "../../components/MediaDetails/MediaDetails";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  const page = useLocation();
  const isProfilePage = page.pathname.includes("/profile");

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      try {
        const { data } = await axios.get("http://localhost:8080/pickaflix", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        setFailedAuth(true);
      }
    };
    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main>
        <div className="layout__login-section">
          <p className="layout__login">
            You must be logged in to see this page.
          </p>
          <p>
            <Link to="/login" className="layout__link">
              LOG IN
            </Link>
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  return (
    <>
      <Header logOut={handleLogout} username={user.username} />
      <main>
        <div className="layout">
          <div className="layout__header">
            <h1
              className={` ${
                isProfilePage
                  ? "layout__title layout__title--profile"
                  : "layout__title"
              }`}
            >
              Watchlist
            </h1>
            <img
              src={starIcon}
              alt="coral star icon"
              className="layout__icon"
            />
          </div>
          <div className="layout__media">
            <MediaContent />
            <MediaDetails type="media" />
          </div>
          <div
            className={` ${
              isProfilePage
                ? "layout__header layout__header--profile"
                : "layout__header"
            }`}
          >
            <h1
              className={` ${
                isProfilePage
                  ? "layout__title layout__title--profile"
                  : "layout__title"
              }`}
            >
              Watched
            </h1>
            <img
              src={starIcon}
              alt="coral star icon"
              className="layout__icon"
            />
          </div>
          <div className="layout__media">
            <MediaContent />
            <MediaDetails type="comments" />
          </div>
          <div className="layout__media">
            <MediaDetails />
          </div>
        </div>
      </main>
    </>
  );
}
