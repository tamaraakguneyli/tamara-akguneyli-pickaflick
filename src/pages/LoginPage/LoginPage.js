import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/logo/Logo.svg";

export default function LoginPage() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/loading");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };
  return (
    <main className="login-page">
      <img
        className="login-page__logo"
        src={logo}
        alt="pickaflick coral logo"
      />
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input
          type="text"
          name="username"
          label="Username"
          className={
            error.includes("username") ||
            error.includes("required username") ||
            error.includes("exist")
              ? "field__input field__input--invalid"
              : "field__input"
          }
        />
        <Input
          type="password"
          name="password"
          label="Password"
          className={
            error.includes("password") || error.includes("required password")
              ? "field__input field__input--invalid"
              : "field__input"
          }
        />
        <button className="login__button">Log in</button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <p className="login__register">
        Need an account?{" "}
        <Link to="/register" className="login__link">
          Register Here
        </Link>
      </p>
    </main>
  );
}
