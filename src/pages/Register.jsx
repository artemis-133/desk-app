import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const idRef = useRef(null);
  const passRef = useRef(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const handleChange = function (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    console.log(form);
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const answer = await res.json();
    console.log(answer);
    e.target.reset();
    if (
      answer["return"].localeCompare(
        "User saved. Logging In Automatically!"
      ) === 0
    ) {
      localStorage.setItem("token", JSON.stringify(answer));
      setToken(answer);
      navigate("/");
    } else {
      setMessage(answer.return);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            ref={nameRef}
          ></input>
        </label>
        <label>
          Username:
          <input
            type="text"
            name="emp_id"
            onChange={handleChange}
            ref={idRef}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            ref={passRef}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login here</Link>
      <div>{message ? message : ""}</div>
    </>
  );
};

export default Register;
