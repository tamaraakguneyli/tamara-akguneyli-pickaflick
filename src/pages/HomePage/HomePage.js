import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import MediaContent from "../../components/MediaContent/MediaContent";
import starIcon from "../../assets/images/icons/star-icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);

  const getMedia = async () => {
    try {
      const { data: moviesData } = await axios.get(
        `${API}/3/movie/top_rated${API_KEY}`
      );
      setMovies(moviesData.results);

      const { data: seriesData } = await axios.get(
        `${API}/3/tv/top_rated${API_KEY}`
      );
      setSeries(seriesData.results);
    } catch (error) {
      console.log("Error fetching media data", error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

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
        <div className="home-layout__login-section">
          <p className="home-layout__login">
            You must be logged in to see this page.
          </p>
          <p>
            <Link to="/login" className="home-layout__link">
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
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <div className="home-layout">
        <div className="home-layout__header">
          <h1 className="home-layout__title">Movies</h1>
          <img
            src={starIcon}
            alt="coral star icon"
            className="home-layout__icon"
          />
        </div>
        <MediaContent media={movies} />
        <div className="home-layout__header">
          <h1 className="home-layout__title">Series</h1>
          <img
            src={starIcon}
            alt="coral star icon"
            className="home-layout__icon"
          />
        </div>
        <MediaContent media={series} />
      </div>
      <button onClick={handleLogout} className="home-layout__logout">
        Log out
      </button>
    </main>
  );
}
