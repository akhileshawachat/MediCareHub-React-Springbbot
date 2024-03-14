import { useUserContext } from "../Context/Context";
import { downloadPrescription, getAppointmentsByPatientId } from "../Services/PatientServices";
import { deleteAppointment } from "../Services/DoctorServices";
import { Button, Container, Table, Modal ,Row, Card, ListGroup, ListGroupItem, Col} from "react-bootstrap";
import profilepic from "./Image/profilepic.jpg";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PatientDashboard() {

    

    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();

    const {userState, updateState} =useUserContext();
    let patientId = userState.loginId;

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
            const data = await getAppointmentsByPatientId(userState.loginId,userState.token);
            console.log(data);
           
            setAppointments(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getPrescription = async () => {
        if (!patientId) {
            return "Patient ID is required";
        }
    
        try {
            let headers = {
                'Authorization': `Bearer ${userState.token}`,
                'Content-Type': 'application/json'
            };
    
            const response = await axios.get(
                `http://localhost:9090/downloadPrescription/${patientId}`,
                {
                    headers,
                    responseType: "blob",
                }
            );
    
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
    
            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "medical_history.pdf");
    
            // Append the link to the document and trigger the click event
            document.body.appendChild(link);
            link.click();
    
            // Clean up by removing the link and revoking the object URL
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading medical history:", error.message);
        }
    };
    

    console.log(appointments)

    return (
        <Container fluid className="PatientDashboard" style={{padding:'50px',color:'white'}}>
<Row><Col lg={3}>
<Card style={{ width: '18rem' }}>
<Card.Header as="h5">Profile</Card.Header>
      <Card.Img variant="top" src={profilepic} alt="User Profile" />
      <Card.Body>
        <Card.Title>{userState.loginName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{"Patient"}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          {/* <ListGroupItem>Name: {userState.loginName}</ListGroupItem> */}
          <ListGroupItem>Email: {userState.loginEmail}</ListGroupItem>
          <ListGroupItem>Phone: {userState.loginPhone}</ListGroupItem>
          {/* <ListGroupItem>Date of Birth: {userState.loginDateOfBirth}</ListGroupItem> */}
          <ListGroupItem>Gender: {userState.loginGender}</ListGroupItem>
          <ListGroupItem>City: {userState.loginCity}</ListGroupItem>
          {/* Add more details as needed */}
        </ListGroup>
        <Button variant="primary" onClick={() => {
                         navigate("/updatePatient")
                    }}>Edit Profile</Button>
      </Card.Body>
    </Card>
</Col>
<Col>
            <Row><h1>Appointment List</h1></Row>
            {appointments.length > 0 ?
                <Table className=" AppList" >
                    <thead className="border-dark">
                        <tr >
                            <th> Appointment date</th>
                            <th> Appointment Time</th>
                            <th> Symptoms</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Cancel</th>
                            <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((s,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{s.appdate}</td>
                                        <td>{s.apptime}</td>
                                        <td>{s.symptoms}</td>
                                        <td>{s.height}</td>
                                        <td>{s.weight}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedAppId(s.id);
                                            }}>Cancel Appointment</Button>
                                            </td>
                                            <td>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(`/edit/${s.id}`);
                                               navigate(`/editPatient/${s.id}`, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

                <Button size="lg" onClick={getPrescription}>Download Prescription</Button>


            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete Appointment ?</Modal.Body>
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
            </Col></Row>
            
        </Container>
    );
}