import axios from "axios";

let url='http://localhost:9090';
//------------------------------------------------to fetch the data of learner-------------------------------------------

// export async function fetchuser(){
//     try {
//         const response=await axios.get("http://127.0.0.1:4900/user");
        
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

//----------------------------------------------------to save the register patient-------------------------------------------

export async function savePatient(patientData){
   
    try {
        const response=await axios.post("http://localhost:9090/register",patientData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



//----------------------------------------------------------to fetch patient by patientId-------------------------------------

export async function fetchPatientById(patientId,token){
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        const response = await axios.get(`${url}/fetchPatientById/${patientId}`,{headers});
        return response.data;
     } catch (error) {
         console.log(error);
     }
}


//---------------------------------------------------------to update Patient data by patientId--------------------------------

export async function updateProfile(updatedData,token){

    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        const response = await axios.put(`${url}/updateByPatient`,updatedData,{headers});
        return response.data;
     } catch (error) {
         console.log(error);
     }
}

//--------------------------------------------------------to login as Patient--------------------------------------------------

export async function patientLogin(credentials){
    const response = await axios.post("http://localhost:9090/patientLogin",credentials);
    return response.data;
}


//----------------------------------------------------to save appointment-------------------------------------------

export async function bookAppointment(appData,token){
   
    try {
        let headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        console.log('appdata',appData)
        const response=await axios.post(url+"/bookAppointment?patientId="+appData.patientId+"&doctorId="+appData.doctorId,appData,{headers});
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


//-----------------------------------------------------------------------get appointments by patientId---------------------------

 export async function getAppointmentsByPatientId(patientId,token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.get(`${url}/getAppointmentsByPatientId/${patientId}`,{headers});
    
    return response.data;
}

//----------------------------------------------------------to delete the appointment -----------------------------------------


//--------------------we are deleting appointment by appointmentId and by using the doctorService deleteAppointment method-------------------------------------

// export async function deleteAppointment(appId){
//     try {
//        const response = await axios.delete(url+`/rejectAppointmentByDoctor/${appId}`);
//        return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }




//-----------------------------------------------------------------------to update appointment by appointmentId and doctorId---------------------------

export async function updateAppointmentsByAppIdAndPatId(patientId,credentials,token){
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    
    const response = await axios.put(`${url}/updateByPatient/${patientId}`,credentials,{headers});
    
    return response.data;
}










