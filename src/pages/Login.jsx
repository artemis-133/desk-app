import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const Login = ({ setToken }) => {
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
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const answer = await res.json();
    console.log(answer);
    e.target.reset();
    if (answer["return"].localeCompare("OK") === 0) {
      localStorage.setItem("token", JSON.stringify(answer));
      setToken(answer);
    } else {
      setMessage(answer["return"]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
      <Link to="/register">Register here</Link>
      <div>{message ? message : ""}</div>
    </>
  );
};

export default Login;
