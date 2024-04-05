import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./LoginPage.scss";
import logo from "../../assets/images/logo/Logo.svg";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [enable, setEnable] = useState(false);

  const navigate = useNavigate();

  const handleEnable = async (event) => {
    event.preventDefault();

    setEnable(true);
    navigate("/loading");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/pickaflix/login",
        {
          username: event.target.username.value,
          password: event.target.password.value,
        }
      );

      localStorage.setItem("token", response.data.token);

      navigate("/");
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
        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />
        <button onClick={handleEnable} className="login__button">
          Log in
        </button>
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
