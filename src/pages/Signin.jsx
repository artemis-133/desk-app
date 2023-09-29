import React, { useState, useRef } from "react";
import CommonSection from "../components/Commonsection";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import { Link, useNavigate } from "react-router-dom";

import "../styles/sign-in.css";

const Signin = ({ setToken }) => {
  const navigate = useNavigate();
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
      navigate("/");
    } else {
      setMessage(answer["return"]);
    }
  };

  return (
    <div className="signin-container">
      <Helmet title="Login">
        <section className="p-0">
          <CommonSection title="Login Page" />
        </section>
        <section>
          <Container>
            <Row>
              <Col className="m-auto text-center">
                <Form className="auth_form " onSubmit={handleSubmit}>
                  <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                    <i class="ri-key-2-line"></i> Sign In
                  </h4>
                  <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                    <span>
                      <i class="ri-user-line"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      name="emp_id"
                      onChange={handleChange}
                      ref={idRef}
                    />
                  </FormGroup>
                  <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                    <span>
                      <i class="ri-lock-2-line"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      onChange={handleChange}
                      ref={passRef}
                    />
                  </FormGroup>
                  <button className="login__btn " type="submit">
                    Login
                  </button>
                </Form>
                <h6 className="fs-6  text-center mt-4">
                  <Link to="#">Forgot Password?</Link>
                </h6>
                <h6 className="fs-6 text-center mt-4">
                  <Link to="/signup">Do you need an Account?</Link>
                </h6>
                <div style={{ color: "red" }}>{message ? message : ""}</div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Signin;
