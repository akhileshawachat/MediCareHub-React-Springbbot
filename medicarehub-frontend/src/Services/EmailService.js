import axios from "axios";

let url='http://localhost:9090';

export async function emailSender(emailData){
    const response = await axios.post((url+"/send-email"),emailData);
    return response.data;
}