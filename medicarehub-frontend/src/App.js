import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from './Components/Home.jsx';
import {NavigationBar} from './Components/NavigationBar.jsx';
import {Medicine} from './Components/Medicine.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import {Signup} from './Components/Signup.jsx';
import {Login} from './Components/Login.jsx';
import { Hospitals } from './Components/Hospitals.jsx';
import { General} from './Components/General.jsx';
import { Neuro } from './Components/Neuro.jsx';
import { Cardio } from './Components/Cardio.jsx';
import { Dentist } from './Components/Dentist.jsx';
import { Ortho } from './Components/Ortho.jsx';
import { Urology } from './Components/Urology.jsx';

import { BookingForm } from './Components/BookingForm.jsx';
import { UserContextProvider, useUserContext } from './Context/Context.js';
import { DoctorDashboard } from './Components/DoctorDashboard.jsx';
import EditAppointment from './Components/EditAppointment.jsx';
import EditPatientAppointment from './Components/EditPatientAppointment.jsx';
import { useEffect } from 'react';
import { PatientDashboard } from './Components/PatientDashboard.jsx';
import { UpdatePatientProfile } from './Components/UpdatePatientProfile.jsx';

function App() {
  const {userState, updateState} =useUserContext();
  useEffect(()=>{
    let loginId = localStorage.getItem("loginId");
    let loginStatus = localStorage.getItem("loginStatus");
    let loginName = localStorage.getItem("loginName");
    let loginEmail = localStorage.getItem("loginEmail");
    let loginPhone = localStorage.getItem("loginPhone");
    let loginGender =localStorage.getItem("loginGender");
    let loginCity =localStorage.getItem("loginCity");
    let userType = localStorage.getItem("userType");
    let isLoggedIn =localStorage.getItem("isLoggedIn");
   
    updateState({
      loginId,loginStatus,loginName,loginEmail,loginPhone,loginGender,loginCity,userType,isLoggedIn
    })

  },[])
  return ( 
  <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/medicine" element={<Medicine/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/hospital" element={<Hospitals/>}></Route>
      <Route path="/general" element={<General/>}></Route>
      <Route path="/neuro" element={<Neuro/>}></Route>
      <Route path="/cardio" element={<Cardio/>}></Route>
      <Route path="/dentist" element={<Dentist/>}></Route>
      <Route path="/ortho" element={<Ortho/>}></Route>
      <Route path="/urology" element={<Urology/>}></Route>
      <Route path="/bookingForm" element={<BookingForm/>}></Route>
      <Route path="/doctorDashBoard" element={<DoctorDashboard/>}></Route>
      <Route path="/patientDashBoard" element={<PatientDashboard/>}></Route>
      <Route path="/edit/:id" element={<EditAppointment/>} />
      <Route path="/editPatient/:id" element={<EditPatientAppointment/>} />
      <Route path="/updatePatient" element={<UpdatePatientProfile/>} />
      
        
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;

