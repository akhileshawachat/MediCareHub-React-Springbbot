import {Navbar ,Container ,Nav ,Button} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import './AllCss.css';
import Logo from './Image/Medicarehub.jpeg';
import { useUserContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
export function NavigationBar(){
  const {userState, updateState} =useUserContext();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.setItem("loginId", "");
    localStorage.setItem("loginStatus","");
    localStorage.setItem("loginName","");
    localStorage.setItem("loginEmail", "");
    localStorage.setItem("loginPhone", "");
    localStorage.setItem("loginGender", "");
    localStorage.setItem("loginCity", "");
    localStorage.setItem("userType",'')
    localStorage.setItem("isLoggedIn",'false');
    updateState({})
    navigate('/')
  }
    return(
        <Navbar expand="lg" className=" Navbar bg-body-tertiary sticky-top" bg="dark" style={{height:'80px', fontSize:'20px',color:'white'}}>

        {/* used sticky-top to fix nav bar */}
  
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} alt="Logo" style={{ height: "80px", width:'180px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/">
              <Nav.Link ><b>Home</b></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/hospital">
              <Nav.Link ><b>Hospitals</b></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/medicine">
              <Nav.Link ><b>Medicines</b></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
              <Nav.Link ><b>About</b></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link ><b>Contact</b></Nav.Link>
              </LinkContainer>
              
            
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            {/* <LinkContainer to="/learnerlist">
            <Button variant="outline-success" className="me-5">list</Button>
            </LinkContainer> */}
  
            {/* <LinkContainer to="/admin">
            <Button variant="outline-success" className="me-5">Admin</Button>
            </LinkContainer> */}
  

  {userState.isLoggedIn === 'true' ? (
              <>
              <LinkContainer to="/" onClick={handleLogout}>
              <Button  className="loginbutton me-2">Sign Out</Button>
              </LinkContainer>
              
              {userState.userType === 'doctor' ?
              <LinkContainer to="/DoctorDashboard">
              <Button variant="dark" className="me-3">User</Button>
              </LinkContainer>
              :  <LinkContainer to="/PatientDashboard">
              <Button variant="dark" className="me-3">User</Button>
              </LinkContainer>
              }
              </>
            ): (
              <>
              <LinkContainer to="/login">
              <Button  className="loginbutton me-2">Login</Button>
              </LinkContainer>
              
    
              {/* <LinkContainer to="/signinadmin">
              <Button variant="primary" className="me-2" >Sign In</Button>
              </LinkContainer> */}
              
              <LinkContainer to="/signup">
              <Button variant="dark" className="me-3">Sign Up</Button>
              </LinkContainer>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}