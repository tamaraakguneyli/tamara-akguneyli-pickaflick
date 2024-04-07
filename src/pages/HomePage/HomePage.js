import React, { useEffect, useState } from "react";
import MediaContent from "../../components/MediaContent/MediaContent";
import starIcon from "../../assets/images/icons/star-icon.png";
import topMovieHeader from "../../assets/images/icons/top-movies-icon.png";
import topSeriesHeader from "../../assets/images/icons/top-series-icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import TopMedia from "../../components/TopMedia/TopMedia";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const API = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);
  const [topMovies, setTopMovies] = useState(null);
  const [topSeries, setTopSeries] = useState(null);
  const { type, mediaId } = useParams();
  const [_eachMedia, setEachMedia] = useState(null);

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
      const { data: topMoviesData } = await axios.get(
        `${API}/3/trending/movie/day${API_KEY}`
      );
      setTopMovies(topMoviesData.results.slice(0, 3));

      const { data: topSeriesData } = await axios.get(
        `${API}/3/trending/tv/day${API_KEY}`
      );
      setTopSeries(topSeriesData.results.slice(0, 3));
    } catch (error) {
      console.log("Error fetching media data", error);
    }
  };

  const getEachMedia = async (type, id) => {
    try {
      const response = await axios.get(`${API}/3/${type}/${id}${API_KEY}`);
      const { data } = response;

      if (type === "movie") {
        setEachMedia(data);
        console.log("Each Movie Data:", data);
      } else if (type === "tv") {
        setEachMedia(data);
        console.log("Each Series Data:", data);
      }
    } catch (error) {
      console.log("Error fetching media data:", error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  useEffect(() => {
    if (mediaId && type) {
      getEachMedia(type, mediaId);
    }
  }, [mediaId, type]);

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
            <h1 className="layout__title">Movies</h1>
            <img
              src={starIcon}
              alt="coral star icon"
              className="layout__icon"
            />
          </div>
          <MediaContent media={movies} user={user} />
          <div className="layout__header">
            <h1 className="layout__title">Series</h1>
            <img
              src={starIcon}
              alt="coral star icon"
              className="layout__icon"
            />
          </div>
          <MediaContent media={series} />
        </div>
        <section className="layout__top-media">
          <div className="layout__top-blocks">
            <img
              src={topMovieHeader}
              alt="top movies title"
              className="layout__top-title"
            />
            <TopMedia media={topMovies} />
          </div>
          <div className="layout__top-blocks">
            <img
              src={topSeriesHeader}
              alt="top movies title"
              className="layout__top-title"
            />
            <TopMedia media={topSeries} />
          </div>
        </section>
      </main>
    </>
  );
}
