import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { recruiterLogin } from "../hooks/useLogin";

const RecruiterLogin = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const recaptchaRef = useRef(null)
  const [recaptchaToken, setRecaptchaToken] = useState(null); // To store reCAPTCHA token

  const { loading, login } = recruiterLogin(); // Custom hook for login

  // Handle form submission (new add)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function with email and password (new add)
    await login(email, password);
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Recruiter Log In</h2>

        {/* Login Form */}
        <Form onSubmit={handleSubmit}> {/* new add: form submission */}
          {/* Email Input */}
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              className="p-3"
              style={{ backgroundColor: "#E0F2FF", border: "none" }}
              value={email} // new add: link state
              onChange={(e) => setEmail(e.target.value)} // new add: update state
            />
          </Form.Group>

          {/* Password Input */}
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              className="p-3"
              style={{ backgroundColor: "#E0F2FF", border: "none" }}
              value={password} // new add: link state
              onChange={(e) => setPassword(e.target.value)} // new add: update state
            />
          </Form.Group>

          {/* Forgot Password */}
          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="text-muted">
              Forgot Password?
            </a>
            <a href="#" className="text-primary">
              Reset
            </a>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef} // Assign ref to reset the widget
            sitekey="6Le0oUYqAAAAAJNvvKKCKMIdIFC7AQwT1QRKoZyt"
            onChange={onRecaptchaChange}
          />

          {/* Login Button */}
          <Button
            variant="primary"
            className="w-100 p-3"
            style={{ backgroundColor: "#144B7D", border: "none" }}
            type="submit" // new add: form submission button
            disabled={loading} // new add: disable button while loading
          >
            {loading ? "Loading..." : "LOG IN"} {/* new add: show loading */}
          </Button>
        </Form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-muted">
            Don't have an Account?{" "}
            <a href="#" className="text-primary">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default RecruiterLogin;
