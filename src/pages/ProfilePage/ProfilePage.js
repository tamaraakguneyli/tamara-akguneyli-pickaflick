import React, { useEffect, useState } from "react";
import "./ProfilePage.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

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
        <Loader />
      </main>
    );
  }
  return (
    <>
      <Header logOut={handleLogout} username={user.username} />
    </>
  );
}
