 

 import { Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
 import Accordion from 'react-bootstrap/Accordion';
 import Filter from "./Filter";
import { useEffect, useState } from "react";
import { getAllDoctors ,updateAppointmentsByAppIdAndDocId} from "../Services/DoctorServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../Context/Context";



 const EditAppointment = () =>{
    const [formData,setFormData] = useState({});
    const [doctorList, setDoctorList] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const location = useLocation();
  const state = location?.state;
console.log(state)
const navigate = useNavigate();

const {userState, updateState} =useUserContext();

    const { id } = useParams();

    console.log(id)

    useEffect(() => {
        try {



            async function fetchData() {
                let response = await getAllDoctors();
                setDoctorList(response);

                // let appointmentResponse = await getAppointmentById(id);
                // setFormData(appointmentResponse.data)
            }
            fetchData();
        }
        catch (error) {
            console.log(error);
        }
    }, []);


    useEffect(()=>{
        setFormData(state?.appointmentData)
    },[state])

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

         e.preventDefault();
         console.log(formData);

        try {
            
             let data ={...formData, doctorId: userState.loginId.toString()};
             console.log(userState.loginId);

              const result = await updateAppointmentsByAppIdAndDocId(userState.loginId,formData);
            setIsSubmitted(true);


             setTimeout(() => {
                 setIsSubmitted(false)       //to vanish the registered successful message after 2 sec
             }, 2000);

             console.log(result.message);

        } catch (error) {
            console.log(error);
        }
    };


    console.log(formData)
    return (
        
        <Container fluid className='DoctorEditForm' style={{minHeight:'650px'}}>
        
        <Form onSubmit={handleSubmit}  style={{width:'400px',paddingTop:'100px'}}>
                        <h1>Edit Appointment</h1>
                        <br/>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Symptoms</b></Form.Label>
                            <Form.Control disabled type="textarea" placeholder="Enter Symptoms" name="symptoms" value={formData?.symptoms} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Doctor</b></Form.Label>
                            <Form.Control disabled type="textarea" placeholder="Enter doctor" name="doctor" value={formData?.doctor?.name} onChange={handleChange} required />
                        </Form.Group>
                        <Row>
                            <Col>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Appointment Date</b></Form.Label>
                                    <Form.Control type="date" placeholder="Enter AppointmentDate" name="appdate" value={formData?.appdate} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><b>Appointment Time</b></Form.Label>
                                    <Form.Control as="select" name="apptime" value={formData?.apptime} onChange={handleChange} required>
                                        <option value="" disabled>Select</option>
                                        <option value="9:00">9:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="3:00">3:00 PM</option>
                                        <option value="6:00">6:00 PM</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Height</b></Form.Label>
                            <Form.Control disabled type="number" placeholder="Enter Height" name="height" value={formData?.height} onChange={handleChange} required min="100" max="300" />
                            <Form.Text className="text" style={{color:'white'}}>
                                Height must be in cm
                            </Form.Text>
                        </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Weight</b></Form.Label>
                            <Form.Control disabled type="number" placeholder="Enter Weight" name="weight" value={formData?.weight} onChange={handleChange} required min="5" max="200" />
                            <Form.Text className="text" style={{color:'white'}}>
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
        </Container>
        
    
    )
 }


 export default EditAppointment;