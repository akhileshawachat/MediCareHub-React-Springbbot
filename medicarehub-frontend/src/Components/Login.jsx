import { Container, Col, Row, Form, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { patientLogin } from "../Services/PatientServices";
import { doctorLogin } from "../Services/DoctorServices";
import {Image} from "react-bootstrap";
import login from "./Image/login.jpg";
import { useUserContext } from "../Context/Context";
export function Login() {
  const navigate = useNavigate();

  const {userState, updateState} =useUserContext();

  console.log(userState);

  const [formData, setFormData] = useState(
    {
      login: "", email: "", phone: "", password: ""
    }
  );
  const [loginError, setLoginError] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.login==='patient') {
      console.log("patient");
      try {
        const result = await patientLogin(formData);
        console.log(result.loginStatusMessage);
        updateState({...result,userType:'patient',isLoggedIn:'true'});
        console.log({...result,userType:'patient'});
        localStorage.setItem("token", result.token);
        
        localStorage.setItem("loginId", result.loginId);
        localStorage.setItem("loginStatus", result.loginStatus);
        localStorage.setItem("loginName", result.loginName);
        localStorage.setItem("loginEmail", result.loginEmail);
        localStorage.setItem("loginPhone", result.loginPhone);
        localStorage.setItem("loginGender", result.loginGender);
        localStorage.setItem("loginCity", result.loginCity);
        localStorage.setItem("userType",'patient')
        localStorage.setItem("isLoggedIn",'true')

        if(result.loginStatus){
          navigate("/");
        }
        else{
          setLoginError(true);

          setTimeout(() => {
            setLoginError(false);       //to vanish the message after 2 sec
          }, 2000);
        }
      } 
      catch (error) {
        console.log(error);  
        setLoginError(true);
      }
    }
    else {
      console.log("doctor");
      try {
        const result = await doctorLogin(formData);
        console.log(result.loginStatusMessage);
        updateState({...result,userType:'doctor',isLoggedIn:'true'});

        localStorage.setItem("loginId", result.loginId);
        localStorage.setItem("loginStatus", result.loginStatus);
        localStorage.setItem("loginName", result.loginName);
        localStorage.setItem("loginEmail", result.loginEmail);
        localStorage.setItem("loginPhone", result.loginPhone);
        localStorage.setItem("loginGender", result.loginGender);
        localStorage.setItem("loginCity", result.loginCity);
        localStorage.setItem("userType",'doctor')
        localStorage.setItem("isLoggedIn",'true')

        if(result.loginStatus){
        navigate("/doctorDashBoard");
        }
        else{
          setLoginError(true);

          setTimeout(() => {
            setLoginError(false);       //to vanish the message after 2 sec
          }, 2000);
        }
      }
       catch (error) {
        console.log(error);
        setLoginError(true);
      }
    }
  }
  return (
    <Container fluid className="Login">

      <Row style={{ padding: "" }}>
        <Col lg={2}>
        </Col>
        <Col lg={3}>
          <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none' }}>
            <h2><b>Login</b></h2>
          </Alert>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><b>Gender</b></Form.Label>
              <Row>
                <Col lg={3}><Form.Check type="radio" label="Patient" name="login" value="patient" checked={formData.login === 'patient'} onChange={handleChange} required /></Col>
                <Col lg={3}><Form.Check type="radio" label="Doctor" name="login" value="doctor" checked={formData.login === 'doctor'} onChange={handleChange} required /></Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Email</b></Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Phone Number</b></Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: 'rgb(0,0,153)' }}><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
              <Form.Text className="text-muted">
                Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
              </Form.Text>
            </Form.Group>


            <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
              Login
            </Button>

          </Form>
          {loginError ? <Alert style={{ backgroundColor: "#F35F5F" }}>Invalid Credentials</Alert> : null}
          
        </Col>
        <Col lg={1}>
        </Col>
        <Col lg={6}>
        <Image  src={login}></Image>
        </Col>
      </Row>


    </Container>
  );
}