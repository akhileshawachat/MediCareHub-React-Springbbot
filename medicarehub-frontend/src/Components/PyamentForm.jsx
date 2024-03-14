import axios from "axios";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function PaymentGateway() {
  const [fees, setFees] = useState("100");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFees(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:9090/paymentGateway';

    try {
      const response = await axios.post(url, { fees });
      const { data } = response;

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: 'rzp_test_HhgkYLDKc9OTjS',
          amount: fees * 100,
          currency: 'INR',
          name: 'Medicarehub',
          description: 'Payment for Services',
          order_id: data.id,
          handler: (response) => {
            console.log(response);
            alert('Payment successful!');
            navigate('/bookingForm');
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };
    } catch (error) {
      console.error('Payment failed');
      console.error(error);
      alert('Payment failed. Please try again.');
    }
  }

  return (
    <div style={containerStyle}>
      <Col lg={4}>
        <Form onSubmit={handleSubmit} style={formStyle}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label><b>Please pay token amount to book the appointment</b></Form.Label>
            <Form.Control disabled type="text" placeholder="100" name="fees" value={fees} onChange={handleChange} style={feesStyle} />
          </Form.Group>
          <Button style={buttonStyle} type="submit">
            Pay
          </Button>
        </Form>
      </Col>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',  // view port height
  background: 'url(https://media.istockphoto.com/id/1282305579/photo/mug-with-hot-tea-standing-on-a-chair-with-woolen-blanket-in-a-cozy-living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=fh-Yh3SR7PvFgPx7UfKokjEgQ7oChedSEwDJP-hnlH4=) center/cover', // Replace 'your-image-path.jpg' with the path to your image
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const feesStyle = {
  marginBottom: '1rem',
};

const buttonStyle = {
  backgroundColor: 'rgb(0, 102, 102)',
  color: 'white',
  width: '100%',
};
