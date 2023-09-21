import React from "react";
import { Container, Form, Row, Col, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import CommonSection from "../components/Commonsection";

const Signup = ({ saveToken }) => {
  return (
    <Helmet title="Sign Up">
      <section className="p-0">
        <CommonSection title="Sign Up Page" />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="8" xs="10" className="m-auto">
              <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                <i class="ri-user-add-line"></i> Sign Up
              </h4>
              <Form>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-user-line"></i>
                  </span>
                  <input type="text" placeholder="Username" required />
                </FormGroup>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <input type="email" placeholder="Email" required />
                </FormGroup>

                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-lock-2-line"></i>
                  </span>
                  <input type="password" placeholder="Password" required />
                </FormGroup>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-lock-2-line"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </FormGroup>
                <button className="login__btn " type="submit">
                  Register Now
                </button>
              </Form>
              <h6 className="fs-6 text-center mt-4">
                <Link to="/signin">Already Have an Account?</Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
