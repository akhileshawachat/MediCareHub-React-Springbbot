import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
//import { saveStudent } from '../Services/ELearningServices';
import './AllCss.css';
import { checkAvailability, getAllDoctors } from '../Services/DoctorServices';
import { bookAppointment } from '../Services/PatientServices';
import { useUserContext } from "../Context/Context";
import { PaymentGateway } from './PyamentForm';

export function BookingForm() {

    const { userState, updateState } = useUserContext();
    const [formData, setFormData] = useState({


        patientId: '',
        appdate: '',
        apptime: '',
        symptoms: '',
        height: '',
        weight: '',
        doctorId: ''



    });

    const [selectedDoctor, setSelectedDoctor] = useState({      //createdhook to set the data of Doctor id and appdate to pass in timeslot api
        doctor: {
            id: ''
        },
        appdate: ''
    });

    const [timeSlots, setTimeSlots] = useState([]);

    // to print inserted sucessful or not message on page
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                let response = await getAllDoctors(userState.token);
                setDoctorList(response);
            }
            fetchData();
        }
        catch (error) {
            console.log(error);
        }
    }, []);
    // const [error, setError] = useState("");

    const handleDoctorSelect = async () => {
        try {
            const result = await checkAvailability(selectedDoctor,userState.token);     //API for checking available timeslots
            setTimeSlots(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });

{/* -------------------------------------------------------to select the date of future only (validating aapointment date) -------------------------------------------------*/}

        if (e.target.name === 'appdate') {
            // Get today's date
            const today = new Date();
            // Get the selected date from the input
            const selectedDate = new Date(e.target.value);
            // Compare selected date with today's date
            if (selectedDate < today) {
                // If selected date is in the past, set it to today's date
                setFormData({ ...formData, [e.target.name]: today.toISOString().split('T')[0] });
            } else {
                // If selected date is valid, update the form data
                setFormData({ ...formData, [e.target.name]: e.target.value });
            }
            setSelectedDoctor({ ...selectedDoctor, appdate: e.target.value });

           
        } else {
            // For other fields, update the form data normally
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    console.log(userState);
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(formData);

        try {

            let data = { ...formData, patientId: userState.loginId.toString() };

            const result = await bookAppointment(data,userState.token);
            setIsSubmitted(true);


            setTimeout(() => {
                setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
            }, 2000);

            console.log(result.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container fluid className="BookingForm">

            <Row>
                <Col lg={1}></Col>
                <Col lg={4}>
                    <Alert style={{ background: 'transparent', textAlign: 'center', border: 'none', color: 'white' }}>
                        <h2>Welcome to Booking form</h2>
                    </Alert>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Symptoms</b></Form.Label>
                            <Form.Control type="textarea" placeholder="Enter Symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} required />
                        </Form.Group>



{/* -------------------------------------------------------fetching doctor list dynamically -------------------------------------------------*/}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Doctor</b></Form.Label>
                            <Form.Control as="select" name="doctorId" value={formData.doctorId} onChange={(e) => {
                                setFormData({ ...formData, doctorId: e.target.value });
                                setSelectedDoctor({ ...selectedDoctor,  doctor: { id: e.target.value } });
                            }} required>
                                <option value="" disabled selected>Select</option>
                                {doctorList.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}

                            </Form.Control>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Appointment Date</b></Form.Label>
                                    <Form.Control type="date" placeholder="Enter AppointmentDate" name="appdate" value={formData.appdate} onChange={handleChange} required />
                                </Form.Group>
                                <Button
                                    style={{ backgroundColor: "rgb(0,0,153)" }}
                                    onClick={handleDoctorSelect}
                                    disabled={!selectedDoctor}>
                                    Check Availability
                                </Button>
                            </Col>

                            <Col>
                            

  {/* -------------------------------------------------------fetching timeslots dynamically -------------------------------------------------*/}
                          
                                {timeSlots.length > 0 &&
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label><b>Appointment Time</b></Form.Label>
                                        <Form.Control as="select" name="apptime" value={formData.apptime} onChange={handleChange} required>
                                            <option value="" disabled>Select</option>
                                            {timeSlots.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Height</b></Form.Label>
                                    <Form.Control type="number" placeholder="Enter Height" name="height" value={formData.height} onChange={handleChange} required min="100" max="300" />
                                    <Form.Text className="text" style={{ color: 'white' }}>
                                        Height must be in cm
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Weight</b></Form.Label>
                                    <Form.Control type="number" placeholder="Enter Weight" name="weight" value={formData.weight} onChange={handleChange} required min="5" max="200" />
                                    <Form.Text className="text" style={{ color: 'white' }}>
                                        Weight must be in kg
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Button style={{ backgroundColor: "rgb(0,0,153)" }} type="submit">
                                Submit
                            </Button>
                            {isSubmitted ? <Alert style={{ backgroundColor: "rgb(0,204,102)" }}>Registered Successfully</Alert> : null}
                        </Row>
                    </Form>
                </Col>
                <Col lg={7}></Col>
            </Row>

            <Row className='mt-3' style={{ height: '50px' }}>
                <Col lg={6}>
                </Col>
                <Col lg={6}>

                </Col>
            </Row>

        </Container>
    );
};










