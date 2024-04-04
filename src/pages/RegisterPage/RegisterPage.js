import Input from "../../components/Input/Input";
import "./RegisterPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/pickaflix/register", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });
      navigate("/login");
    } catch (error) {
      event.target.reset();
      setError(error.response.data);
    }
  };

  return (
    <main className="register-page">
      <form className="register" onSubmit={handleSubmit}>
        <h1 className="register__title">Register</h1>
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="register__button">Register Now</button>
        <p>{error}</p>
      </form>
      <p className="register__login">
        Have an account?{" "}
        <Link to="/login" className="register__link">
          Log in
        </Link>
      </p>
    </main>
  );
}
