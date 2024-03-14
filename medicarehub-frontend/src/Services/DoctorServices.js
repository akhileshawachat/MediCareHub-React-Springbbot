import axios from "axios";

//-----------------------------------------------------------------------to login as doctor---------------------------
let url='http://localhost:9090';

export async function doctorLogin(credentials){
    const response = await axios.post((url+"/doctorLogin"),credentials);
    return response.data;
}


//-----------------------------------------------------------------------to fetch all doctor for dropdown---------------------------
export async function getAllDoctors(token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    const response = await axios.get(url+"/getAllDoctors",{headers});
    return response.data;
}


//-----------------------------------------------------------------------to appointments by doctorId---------------------------
export async function getAppointmentsByDoctorId(doctorId,token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
console.log("headers",headers);
    
    const response = await axios.get(`${url}/getAppointmentsByDoctorId/${doctorId}`,{headers});
    
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


//------------------------------------------------to fetch all time slots for particular doctor for dropdown---------------------------

export async function checkAvailability(doctorAndDate,token) {
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        const response = await axios.post(`${url}/getTimeSlot`, doctorAndDate,{headers});
        return response.data;
    } catch (error) {
        console.error("Error checking availability:", error);
        throw error; // Rethrow the error to handle it in the component or other parts of your application
    }
}