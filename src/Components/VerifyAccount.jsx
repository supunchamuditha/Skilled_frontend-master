// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useState } from 'react';

// const VerifyAccount = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(''));

//   // Handle OTP input
//   const handleOtpChange = (element, index) => {
//     if (isNaN(element.value)) return;

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     // Move focus to the next input field
//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div className="text-center" style={{ maxWidth: '600px' }}>
//         <h2 className="mb-4">Verify Your Account</h2>

//         <p className="mb-4">
//           We E-mailed you a six digit code (OTP) to example...@gmail.com
//           <br />
//           Enter the code below to confirm your E-mail Address
//         </p>

//         {/* OTP Input Fields */}
//         <Row className="mb-4 justify-content-center">
//           {otp.map((data, index) => (
//             <Col xs={2} key={index}>
//               <Form.Control
//                 type="text"
//                 maxLength="1"
//                 className="text-center p-2"
//                 style={{ fontSize: '2rem', border: '1px solid #ccc' }}
//                 value={data}
//                 onChange={(e) => handleOtpChange(e.target, index)}
//                 onFocus={(e) => e.target.select()}
//               />
//             </Col>
//           ))}
//         </Row>

//         {/* Verify Button */}
//         <Button
//           variant="primary"
//           className="w-100 p-3 mb-3"
//           style={{ backgroundColor: '#144B7D', border: 'none' }}
//         >
//           Verify Now
//         </Button>

//         {/* Resend OTP */}
//         <p>
//           OTP not received? <a href="#" className="text-primary">Resend</a>
//         </p>
//       </div>
//     </Container>
//   );
// };

// export default VerifyAccount;

import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to the homepage

const VerifyAccount = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize for navigation

  // Handle OTP input
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move focus to the next input field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Function to send OTP to backend for verification
  const handleVerifyOtp = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    const otpCode = otp.join(''); // Convert OTP array into a string

    try {
      // Send OTP to the backend (Replace with your API endpoint)
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: otpCode }),
      });

      const result = await response.json();

      if (response.ok) {
        // OTP verification successful
        setMessage('Login successful! Redirecting to home...');
        setTimeout(() => {
          navigate('/'); // Redirect to the homepage after a short delay
        }, 3000); // 3-second delay before redirect
      } else {
        // OTP verification failed
        setError(result.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while verifying the OTP. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="text-center" style={{ maxWidth: '600px' }}>
                <h2 className="mb-4">Verify Your Account</h2>
                <p className="mb-4">
                    We emailed you a six-digit code (OTP) to {email}
                    <br />
                    Enter the code below to confirm your email address
                </p>

        {/* Display success or error message */}
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* OTP Input Fields */}
        <Row className="mb-4 justify-content-center">
          {otp.map((data, index) => (
            <Col xs={2} key={index}>
              <Form.Control
                type="text"
                maxLength="1"
                className="text-center p-2"
                style={{ fontSize: '2rem', border: '1px solid #ccc' }}
                value={data}
                onChange={(e) => handleOtpChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            </Col>
          ))}
        </Row>

        {/* Verify Button */}
        <Button
          variant="primary"
          className="w-100 p-3 mb-3"
          style={{ backgroundColor: '#144B7D', border: 'none' }}
          onClick={handleVerifyOtp}
          disabled={loading}
        >
          {loading ? 'Verifying...' : 'Verify Now'}
        </Button>

        {/* Resend OTP */}
        <p>
          OTP not received? <a href="#" className="text-primary">Resend</a>
        </p>

        {/* Home Link after successful verification */}
        {message && (
          <p className="mt-4">
            <a href="/" className="text-primary">
              Go to Home &rarr;
            </a>
          </p>
        )}
      </div>
    </Container>
  );
};

export default VerifyAccount;
