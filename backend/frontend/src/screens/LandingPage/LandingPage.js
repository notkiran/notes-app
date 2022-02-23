import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notes App</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Button size="lg" className="landingButton">
                <Link to={"/login"}>Login</Link>
              </Button>

              <Button
                size="lg"
                className="landingButton"
                variant="outline-primary"
              >
                <Link to={"/register"}>Signup</Link>
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
