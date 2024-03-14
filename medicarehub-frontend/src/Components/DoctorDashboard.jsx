import { useUserContext } from "../Context/Context";
import { getAppointmentsByDoctorId ,deleteAppointment} from "../Services/DoctorServices";
import { Button, Container, Table, Modal ,Row, Col, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import profilepic from "./Image/Doctorimg.jpeg";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { emailSender } from "../Services/EmailService";

export function DoctorDashboard() {

    

    const [appointments, setAppointments] = useState([]);

    const [emailData, setEmailData] = useState({
        to: '',
        subject:'Doctors Appointment Status!',
        message:'Your Appointment has been canceled'
    });
    
    const navigate = useNavigate();

    const {userState, updateState} =useUserContext();
    let doctorId = userState.loginId;

    //---------------------------------------------to open the delete confirmation modal-------------------------------------------------------------------

    const [showDialog, setShowDialog] = useState(false);

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }


    //-----------------------------------to delete entry of appointment onclicking delete-----------------------------------------------------------------------

    const [selectedPhone, setSelectedPhone] = useState();
    const [appId, setSelectedAppId] = useState();

    const handleDeleteClick = async () => {
        console.log(appId);
        try {
            const response = await deleteAppointment(appId,userState.token);
            console.log(response);
            const emailStatus= await emailSender(emailData);
            await populateAppointmentsState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    //-----------------------------------to fetch learner from database-----------------------------------------------------------------------------

    useEffect(() => {

        if(userState.loginId)
             populateAppointmentsState();
    }, [userState.loginId]);

    

    async function populateAppointmentsState() {
        try {
            const data = await getAppointmentsByDoctorId(userState.loginId,userState.token);
            console.log(data);
           
            setAppointments(data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(appointments)

    return (
        <Container fluid className="DoctorDashboard" style={{padding:'100px',color:'white'}}>
<Row>
<Col lg={3}>
<Card style={{ width: '18rem' }}>
<Card.Header as="h5">Profile</Card.Header>
      <Card.Img variant="top" src={profilepic} alt="User Profile" />
      <Card.Body>
        <Card.Title>{userState.loginName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{"Doctor"}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          {/* <ListGroupItem>Name: {userState.loginName}</ListGroupItem> */}
          <ListGroupItem>Email: {userState.loginEmail}</ListGroupItem>
          <ListGroupItem>Phone: {userState.loginPhone}</ListGroupItem>
          {/* <ListGroupItem>Date of Birth: {userState.loginDateOfBirth}</ListGroupItem> */}
          <ListGroupItem>Gender: {userState.loginGender}</ListGroupItem>
          <ListGroupItem>City: {userState.loginCity}</ListGroupItem>
          {/* Add more details as needed */}
        </ListGroup>
        {/* <Button variant="primary" onClick={() => {
                         navigate("")
                    }}>Edit Profile</Button> */}
      </Card.Body>
    </Card>
</Col>
<Col>
            <Row><h1 style={{color:'black'}}>Appointment List</h1></Row>
            {appointments.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                        <th>Patient Name</th>   
                        <th>Patient Email</th>   
                        <th> Appointment date</th>
                        <th> Appointment Time</th>
                        <th> Symptoms</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Reject</th>
                            <th>Update</th>
                            <th>Add Prescription</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((s,i) => {
                                return (
                                    <tr key={i}>

                                        <td>{s.patient.name}</td>
                                        <td>{s.patient.email}</td>
                                        <td>{s.appdate}</td>
                                        <td>{s.apptime}</td>
                                        <td>{s.symptoms}</td>
                                        <td>{s.height}</td>
                                        <td>{s.weight}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedAppId(s.id);
                                                setEmailData({...emailData, to: s.patient.email});
                                                
                                            }}>Reject Appointment</Button>
                                            </td>
                                            <td>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(`/edit/${s.id}`);
                                               navigate(`/edit/${s.id}`, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
                                        </td>
                                        <td><Button variant="warning" onClick={() => {
                                                
                                        navigate(`/prescriptionForm/${s.id}`, { state: { appointmentData: s } });
                                            }}>Add</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                         handleDeleteClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            </Col>
            </Row>
        </Container>
    );
}