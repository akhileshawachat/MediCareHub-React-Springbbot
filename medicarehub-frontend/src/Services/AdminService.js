import axios from "axios";

let url='http://localhost:9090';

export async function adminLogin(credentials){
    const response = await axios.post((url+"/adminLogin"),credentials);
    return response.data;
}
//-----------------------------------------------------------------------to appointments by doctorId---------------------------
export async function getAppointments(doctorId){

    
    const response = await axios.get(`${url}/fetchAllApointments`);
    
    return response.data;
}



//----------------------------------------------------------------------fetch patients--------------------------
export async function getPatients(token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.get(`${url}/fetchPatients`,{headers});
    
    return response.data;
}

//----------------------------------------------------------------------fetch patients--------------------------
export async function getDoctors(token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.get(`${url}/fetchDoctors`,{headers});
    
    return response.data;
}

//----------------------------------------------------------------------fetch patients--------------------------
export async function getAdmins(token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.get(`${url}/fetchAdmins`,{headers});
    
    return response.data;
}


//-----------------------------------------------------------------------to update appointment by appointmentId and doctorId---------------------------

export async function updateAppointmentsByAppIdAndDocId(doctorId,credentials,token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.put(`${url}/updateByDoctor/${doctorId}`,credentials,{headers});
    
    return response.data;
}

//----------------------------------------------------------to delete the appointment -----------------------------------------

export async function deleteAppointment(appId,token){
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
       const response = await axios.delete(url+`/rejectAppointmentByDoctor/${appId}`,{headers});
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------Remove Patient -----------------------------------------

export async function removePatient(patientId,token){
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        console.log("patient remove : ", patientId)
       const response = await axios.delete(url+`/removePatient/${patientId}`,{headers});
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------Remove Doctor -----------------------------------------

export async function removeDoctor(doctorId,token){
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
       const response = await axios.delete(url+`/removeDoctor/${doctorId}`,{headers});
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------Remove Admin -----------------------------------------

export async function removeAdmin(adminId,token){
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
       const response = await axios.delete(url+`/removeAdmin/${adminId}`,{headers});
       return response.data;
    } catch (error) {
        console.log(error);
    }
}