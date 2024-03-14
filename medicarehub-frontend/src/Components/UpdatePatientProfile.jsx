import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../Context/Context";
 import { fetchPatientById, updateProfile } from "../Services/PatientServices";

export function UpdatePatientProfile () {

    const [formData,setFormData] = useState({});
    const location = useLocation();
    const {userState, updateState} =useUserContext();
    const state = location?.state;
    const [isSubmitted, setIsSubmitted] = useState(false);

 

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData);

       try {
           
            let data ={...formData, paitentId: userState.loginId.toString()};
            console.log(userState.loginId);

             const result = await updateProfile(data,userState.token);
           setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
            }, 2000);

            console.log(result.message);

       } catch (error) {
           console.log(error);
       }
   };
   const populatePatientState = async () => {
    try {
        const result = await fetchPatientById(userState.loginId,userState.token);
        setFormData(result);
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    populatePatientState();
},[]);

    return (
        <Container fluid className="UpdatePatientProfile text-white">

        <Row>
            <Col lg={6}></Col>
            <Col lg={5}>
                <Alert style={{background:'transparent', textAlign:'center', border: 'none',color: 'white'}}>
                    <h2>Edit Profile</h2>
                </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={formData?.name} onChange={handleChange} required pattern="[A-Za-z ]{1,20}" />
                    </Form.Group>                        

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Phone Number</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" name="phone" value={formData?.phone} onChange={handleChange} required pattern="[0-9]{10}" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Email Address</b></Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name="email" value={formData?.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    </Form.Group>

                    <Row>
                        <Col lg={3}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Date of Birth</b></Form.Label>
                        <Form.Control type="date" placeholder="Enter Date of Birth" name="dateOfBirth" value={formData?.dateOfBirth} onChange={handleChange} required />
                    </Form.Group>
                    </Col>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Gender</b></Form.Label>
                        <Row>
                            <Col lg={3}><Form.Check type="radio" label="Male" name="gender" value="male" checked={formData?.gender === 'male'} onChange={handleChange} required /></Col>
                            <Col lg={3}><Form.Check type="radio" label="Female" name="gender" value="female" checked={formData?.gender === 'female'} onChange={handleChange} required /></Col>
                        </Row>
                    </Form.Group>
                    </Col>
                    </Row>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} required pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$" />
                        <Form.Text className="text-muted">
                            Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                        </Form.Text>
                    </Form.Group> */}
                    
                    <Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>City</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter City" name="city" value={formData?.city} onChange={handleChange} required pattern="[A-Za-z0-9]{3,20}" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Enter New Passsword " name="password" value={formData?.password} onChange={handleChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" />
                        <Form.Text className="text" style={{color:'white'}}>
                                Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                            </Form.Text>
                    </Form.Group>
                    
                    <Button style={{backgroundColor:"rgb(0,102,102)"}} type="submit">
                        Update
                    </Button>
                    {isSubmitted ? <Alert style={{backgroundColor:"rgb(0,204,102)"}}>Updated Successfully</Alert> : null}
                    </Row>
                </Form>
            </Col>
        </Row>


        <Row className='mt-3' style={{height:'50px'}}>
            <Col lg={6}>
            </Col>
            <Col lg={6}>
           
            </Col>
        </Row>

    </Container>
    )
}