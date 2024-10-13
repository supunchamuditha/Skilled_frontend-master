import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4">Register</h2>
        <br />

        {/* Registration Form */}
        <Form>
          {/* Name Input */}
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Name" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
          </Form.Group>

          {/* Email Input */}
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Email" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
          </Form.Group>

          {/* Home Town Input */}
          <Form.Group controlId="formHomeTown" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Home Town" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
          </Form.Group>

          {/* Phone Input */}
          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Phone" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
          </Form.Group>

          {/* Gender Radio Options */}
          <Form.Group className="mb-3">
            <Form.Label>Gender:</Form.Label>
            <div>
              <Form.Check
                inline
                label="Male"
                name="gender"
                type="radio"
                id="gender-male"
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type="radio"
                id="gender-female"
              />
            </div>
          </Form.Group>

          {/* Profile Picture and CV Upload */}
          <Row>
            <Col>
              <Form.Group controlId="formProfilePicture" className="mb-3">
                <Form.Label>Profile Picture:</Form.Label>
                <Button variant="primary" className="w-100 p-2" style={{ backgroundColor: '#144B7D', border: 'none' }}>UPLOAD</Button>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formCV" className="mb-3">
                <Form.Label>CV:</Form.Label>
                <Button variant="primary" className="w-100 p-2" style={{ backgroundColor: '#144B7D', border: 'none' }}>UPLOAD</Button>
              </Form.Group>
            </Col>
          </Row>

          {/* Password Input */}
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
            <Form.Text>Password should be comprised of at least 8 characters</Form.Text>
          </Form.Group>

          {/* Confirm Password Input */}
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              className="p-3"
              style={{ backgroundColor: '#E0F2FF', border: 'none' }} 
            />
          </Form.Group>

          {/* Create Account Button */}
          <Button 
            variant="primary" 
            className="w-100 p-3" 
            style={{ backgroundColor: '#144B7D', border: 'none' }}
          >
            CREATE ACCOUNT
          </Button>
        </Form>

        {/* Sign In Section */}
        <div className="text-center mt-4">
          <p className="text-muted">Already have an Account? <a href="#" className="text-primary">Sign In</a></p>
        </div>
      </div>
    </Container>
  );
};

export default Register;