import { useUserContext } from "../Context/Context";

import { Button, Container, Table, Modal ,Row, Col, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import profilepic from "./Image/Doctorimg.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAppointment } from "../Services/DoctorServices";
import { getAdmins, getAppointments, getDoctors, getPatients, removeAdmin, removeDoctor, removePatient } from "../Services/AdminService";


export function AdminDashboard() {

    

    const [appointments, setAppointments] = useState([]);

    const [patients, setPatients] = useState([]);

    const [doctors, setDoctors] = useState([]);

    const [admins, setAdmins] = useState([]);

    const navigate = useNavigate();

    const {userState, updateState} =useUserContext();

    const [selectedPhone, setSelectedPhone] = useState();

    const [appId, setSelectedAppId] = useState();

    const [patientId, setSelectedPatientId] = useState();

    const [doctorId, setSelectedDoctorId] = useState();

    const [adminId, setSelectedAdminId] = useState();

    const [showDialog, setShowDialog] = useState(false);

    const [showDeletePatientDialog, setShowDeletePatientDialog] = useState(false);

    const [showDeleteDoctorDialog, setShowDeleteDoctorDialog] = useState(false);

    const [showDeleteAdminDialog, setShowDeleteAdminDialog] = useState(false);

    //---------------------------------------------to open the delete confirmation modal-------------------------------------------------------------------

   console.log("updatestate:   ",updateState)

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }


     //---------------------------------------------to open the deletepatient confirmation modal-------------------------------------------------------------------

     

     const openDeletePatientModalDialog = () => {
        setShowDeletePatientDialog(true);
     }
     const closeDeletePatientModalDialog = () => {
        setShowDeletePatientDialog(false);
     }


     //---------------------------------------------to open the deletedoctor confirmation modal-------------------------------------------------------------------

     

     const openDeleteDoctorModalDialog = () => {
        setShowDeleteDoctorDialog(true);
     }
     const closeDeleteDoctorModalDialog = () => {
        setShowDeleteDoctorDialog(false);
     }


     //---------------------------------------------to open the deleteadmin confirmation modal-------------------------------------------------------------------

    

     const openDeleteAdminModalDialog = () => {
        setShowDeleteAdminDialog(true);
     }
     const closeDeleteAdminnModalDialog = () => {
        setShowDeleteAdminDialog(false);
     }


    //-----------------------------------to delete entry of appointment onclicking delete-----------------------------------------------------------------------

    
    

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



    //-----------------------------Remove Patient--------------------------------------------
    const handleRemovePatientClick = async () => {
        console.log(patientId);
        try {
            const response = await removePatient(patientId,userState.token);
            console.log(response);
            await populatePatientState();
            closeDeletePatientModalDialog();
        } catch (error) {
            console.log(error);
        }
    }


    //-----------------------------Remove Doctor--------------------------------------------
    const handleRemoveDoctorClick = async () => {
        console.log(doctorId);
        try {
            const response = await removeDoctor(doctorId,userState.token);
            console.log(response);
            await populateDoctorState();
            closeDeleteDoctorModalDialog();
        } catch (error) {
            console.log(error);
        }
    }



    //-----------------------------Remove Admin--------------------------------------------
    const handleRemoveAdminClick = async () => {
        console.log(adminId);
        try {
            const response = await removeAdmin(adminId,userState.token);
            console.log(response);
            await populateAdminState();
            closeDeleteAdminnModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    //-----------------------------------to fetch all users and appointments from database-----------------------------------------------------------------------------
    console.log(userState,"usersatahsdbj");
    useEffect(() => {

        if(userState.loginId){
        populatePatientState();
        populateDoctorState();
        populateAdminState();
        populateAppointmentsState();
    }
    }, [userState.loginId]);

    


    //---------------------------------------- Fill the tables of appointment---------------------------
    async function populateAppointmentsState() {
        try {
            const data = await getAppointments(userState.loginId);
            console.log(data);
           
            setAppointments(data);
        } catch (error) {
            console.log(error);
        }
    }



    //---------------------------------------- Fill the tables of Patient---------------------------
    async function populatePatientState() {
        try {
            const data = await getPatients(userState.token);
            console.log("patient data: ",data);
           
            setPatients(data);
        } catch (error) {
            console.log(error);
        }
    }


    //---------------------------------------- Fill the tables of Doctor---------------------------
    async function populateDoctorState() {
        try {
            const data = await getDoctors(userState.token);
            console.log(data);
           
            setDoctors(data);
        } catch (error) {
            console.log(error);
        }
    }


    //---------------------------------------- Fill the tables of Admin---------------------------
    async function populateAdminState() {
        try {
            const data = await getAdmins(userState.token);
            console.log(data);
           
            setAdmins(data);
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
        <Card.Subtitle className="mb-2 text-muted">{"Admin"}</Card.Subtitle>
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

{/* ------------------------------Patient table Display------------------------------------------- */}
            <Row><h1 style={{color:'black'}}>Patient List</h1></Row>
            {patients.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            
                        <th> name</th>
                        <th> email</th>
                        <th> phone</th>
                        <th> Gender</th>
                        <th>city</th>
                        <th>date_of_birth</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((s,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{s.name}</td>
                                        <td>{s.email}</td>
                                        <td>{s.phone}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.city}</td>
                                        <td>{s.dateOfBirth}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openDeletePatientModalDialog();
                                                setSelectedPatientId(s.id);
                                            }}>Remove User</Button>
                                            </td>
                                            {/* <td>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(/edit/${s.id});
                                               navigate(/edit/${s.id}, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDeletePatientDialog} onHide={closeDeletePatientModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                         handleRemovePatientClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeDeletePatientModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>



{/* ------------------------------Doctor table Display------------------------------------------- */}
            <Row><h1 style={{color:'black'}}>Doctor List</h1></Row>
            {doctors.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            
                        <th> name</th>
                        <th> email</th>
                        <th> phone</th>
                        <th> Gender</th>
                        <th>city</th>
                        <th></th>            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((s,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{s.name}</td>
                                        <td>{s.email}</td>
                                        <td>{s.phone}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.city}</td>
                                        
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openDeleteDoctorModalDialog();
                                                setSelectedDoctorId(s.id);
                                            }}>Remove User</Button>
                                            </td>
                                            {/* <td>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(/edit/${s.id});
                                               navigate(/edit/${s.id}, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDeleteDoctorDialog} onHide={closeDeleteDoctorModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                         handleRemoveDoctorClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeDeleteDoctorModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>




{/* ------------------------------Admin table Display------------------------------------------- */}
            <Row><h1 style={{color:'black'}}>Admin List</h1></Row>
            {admins.length > 0 ?
                <Table className=" mt-4" >
                    <thead className="border-dark">
                        <tr >
                            
                        <th> name</th>
                        <th> email</th>
                        <th> phone</th>
                        <th> Gender</th>
                        <th>city</th>
                        <th>date_of_birth</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins.map((s,i) => {
                                return (
                                    <tr key={i}>
                                        <td>{s.name}</td>
                                        <td>{s.email}</td>
                                        <td>{s.phone}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.city}</td>
                                        <td>{s.dateOfBirth}</td>
                                        <td>
                                            <Button className="me-5" variant="danger" onClick={() => {
                                                openDeleteAdminModalDialog();
                                                setSelectedAdminId(s.id);
                                            }}>Remove User</Button>
                                            </td>
                                            {/* <td>
                                            <Button variant="primary" onClick={() => {
                                            //    navigate(/edit/${s.id});
                                               navigate(/edit/${s.id}, { state: { appointmentData: s } });
                                            }}>Update Appointment</Button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <h2>No Registration Found</h2>}

            <Modal show={showDeleteAdminDialog} onHide={closeDeleteAdminnModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Are you sure to delete Learner with Phone Number {selectedPhone}?</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                         handleRemoveAdminClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeDeleteAdminnModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            </Col>
            </Row>




            
        </Container>
    );
}