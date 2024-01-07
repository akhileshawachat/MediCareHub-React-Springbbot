import axios from "axios";


//-----------------------------------------------------------------------to login as doctor---------------------------
let url='http://localhost:9090';

export async function doctorLogin(credentials){
    const response = await axios.post((url+"/doctorLogin"),credentials);
    return response.data;
}


//-----------------------------------------------------------------------to fetch all doctor for dropdown---------------------------
export async function getAllDoctors(){
    const response = await axios.get(url+"/getAllDoctors");
    return response.data;
}


//-----------------------------------------------------------------------to appointments by doctorId---------------------------
export async function getAppointmentsByDoctorId(doctorId){

    
    const response = await axios.get(`${url}/getAppointmentsByDoctorId/${doctorId}`);
    
    return response.data;
}

//-----------------------------------------------------------------------to update appointment by appointmentId and doctorId---------------------------

export async function updateAppointmentsByAppIdAndDocId(doctorId,credentials){

    
    const response = await axios.put(`${url}/updateByDoctor/${doctorId}`,credentials);
    
    return response.data;
}

//----------------------------------------------------------to delete the appointment -----------------------------------------

export async function deleteAppointment(appId){
    try {
       const response = await axios.delete(url+`/rejectAppointmentByDoctor/${appId}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}