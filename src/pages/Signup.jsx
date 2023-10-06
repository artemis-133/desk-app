import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Row, Col, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet";
import CommonSection from "../components/Commonsection";

import "../styles/sign-in.css";

const Signup = ({ setToken }) => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmRef = useRef(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const handleChange = function (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const checkConfirm = function (e) {
    setConfirm(e.target.value);
  };

  useEffect(() => {
    if (confirm) {
      if (confirm !== form["password"]) {
        setConfirmMsg("Passwords do not match!");
      } else {
        setConfirmMsg("");
      }
    } else {
      setConfirmMsg("");
    }
  }, [confirm, form]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (confirm && !confirmMsg) {
      try {
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
      } catch (error) {
        alert("Server not responding!");
      }
    }
  };

  return (
    <div class="signin-container">
      <Helmet title="Sign Up">
        <section className="p-0">
          <CommonSection title="Sign Up Page" />
        </section>
        <section>
          <Container>
            <Row>
              <Col className="m-auto text-center">
                <Form className="auth_form" onSubmit={handleSubmit}>
                  <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                    <i class="ri-user-add-line"></i> Sign Up
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
                      ref={usernameRef}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      ref={emailRef}
                      onChange={handleChange}
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
                      ref={passRef}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                    <span>
                      <i class="ri-lock-2-line"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      ref={confirmRef}
                      onChange={checkConfirm}
                    />
                  </FormGroup>
                  <button className="login__btn " type="submit">
                    Register Now
                  </button>
                </Form>
                <h6 className="fs-6 text-center mt-4">
                  <Link to="/signin">Already Have an Account?</Link>
                </h6>
                <div
                  style={{
                    marginTop: "20px",
                    color: "red",
                  }}
                >
                  {confirmMsg}
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    color: "red",
                  }}
                >
                  {message}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Signup;
