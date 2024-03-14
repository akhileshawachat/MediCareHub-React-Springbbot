package com.medicarehub.controller;

import java.io.OutputStream;

/*import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.codec.Base64.OutputStream;
import com.medicarehub.dto.BookingStatus;
import com.medicarehub.entity.Appointment;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.service.AppointmentService;

import jakarta.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;*/




import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.medicarehub.dto.BookingStatus;
import com.medicarehub.entity.Appointment;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.service.AppointmentService;
import com.razorpay.*;
import com.razorpay.RazorpayException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@CrossOrigin
public class AppointmentController {

	@Autowired
    private AppointmentService appointmentService;
	
	//@Value("${JWTSecret}")
	public static String jwtSecret= "19cb1666f0b2153fccc19824e3cf828ca65db3706cc5b83e2228165b627c742d766712b689438d0130b1c984f1ca38dd187e083a65b67de6ab41c54ba5b94c44" ;

	
	
	//----------------------------------- jwt autharization code-----------------------------------------------------------------------
	
	public static boolean verifyToken(String token) {
    	System.out.println("care here 3");
        try {
        	if(token.length()==0) {
        		return false;
        	}
        	System.out.println("jwt secret  "+ jwtSecret);
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(jwtSecret)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            // Perform additional verification logic if needed
            System.out.println("claims "+ claims);
            System.out.println("token  "+ token);
            return true;
        } catch (Exception e) {
        	System.out.println("error   "+ e);
            return false;
        }
    }
    
    private String extractTokenFromHeader(String authorizationHeader) {
    	System.out.println("care here 2");
        // Check if the Authorization header is present and starts with "Bearer "
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Extract and return the token part after removing the "Bearer " prefix
        	
            return authorizationHeader.substring(7);
        }

        // If the header is missing or doesn't have the expected format, return null or handle it as needed
        return null;
    }

    
   
    public boolean verifyJwtToken( String authorizationHeader)  {
        // Extract the token from the Authorization header
        String jwtToken = extractTokenFromHeader(authorizationHeader);
        System.out.println("care here 1");
        // Verify the token
        boolean isValidToken = verifyToken(jwtToken);

        if (!isValidToken) {
            // Handle unauthorized access, e.g., throw an exception or redirect to a login page
            return false;
        }

        return true;
    }
    
	
    
    
    
    
    
	//----------------------------------controller mapping starts here --------------------------------------------------------------
	
    @PostMapping("/bookAppointment")
    public BookingStatus bookAppointment(@RequestBody Appointment appointment, @RequestParam int patientId, @RequestParam int doctorId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
       
    	try{
    		
    		//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			Appointment savedAppointment=appointmentService.bookAppointment(appointment, patientId, doctorId);
    		BookingStatus status=new BookingStatus();
    		status.setBookingId(savedAppointment.getId());
    		status.setBookingStatus(true);
    		status.setBookingStatusMessage("Booking Successfull!");
    		
    		return status;
		}else {
			throw new Exception("invalid token");
		}
    		
    	}
    	
    	catch(AppointmentServiceException e){
    		BookingStatus status=new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Booking Failed!");
    		return status;
    	}
        
        
    }
        
  
    
    @GetMapping("/fetchAllApointments")
    public List<Appointment> fetchAll(){
    	return appointmentService.fetchAll();
    }
    
    
    
    

   @PutMapping("/updateByDoctor/{doctorId}")
   public BookingStatus updateAppointment(@PathVariable int doctorId, @RequestBody Appointment updatedAppointment,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {

	 //----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		Appointment appointmentStatus= appointmentService.updateAppointment(doctorId, updatedAppointment);
	    BookingStatus status=new BookingStatus();
		status.setBookingId(appointmentStatus.getId());
		status.setBookingStatus(true);
		status.setBookingStatusMessage("Appointment updated Successfull!");
		return status; 

	}else {
		throw new Exception("invalid token");
	}
	    
   }
   
   
    @DeleteMapping("/rejectAppointmentByDoctor/{appointmentId}")
    public BookingStatus rejectAppointmentByDoctor(@PathVariable int appointmentId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
    	
      //----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		boolean appointmentStatus= appointmentService.deleteAppointmentByDoctor(appointmentId);
        BookingStatus status=new BookingStatus();
		status.setBookingStatus(true);
		status.setBookingStatusMessage("Appointment deleted Successfully!");
		return status; 
	}else {
		throw new Exception("invalid token");
	}
		//status.setBookingId(appointmentStatus.getId());
		
    }
    
   
    @GetMapping("/downloadPrescription/{patientId}")
    public void downloadMedicalHistoryByPatientId(@PathVariable int patientId, HttpServletResponse response,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
    	
    	//----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		List<Appointment> medicalHistoryList = appointmentService.getMedicalHistoryByPatientId(patientId);

        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=\"medical_history.pdf\"");

        try (OutputStream outputStream = response.getOutputStream()) {
            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);

            document.open();
            long a=0;
            document.add(new Paragraph("+++++++++++++-----------------Medical History Report-------------------+++++++++++++++++"));
            document.add(new Paragraph("   "
            		+ "   "));

            for (Appointment history : medicalHistoryList) {
            	 document.add(new Paragraph("-----------------"+ ++a + "]  Medical Report --------------------"));
                 document.add(new Paragraph("  "
                 		+ ""));
            	document.add(new Paragraph("Patient Name: " + history.getPatient().getName()));
                document.add(new Paragraph("Record ID: " + history.getId()));
                document.add(new Paragraph("Visit Date: " + history.getAppdate()));
            //    document.add(new Paragraph("Visit time: " + history.getApptime()));
                document.add(new Paragraph("Doctor Name: " + history.getDoctor().getName()));
                document.add(new Paragraph("Height: " + history.getHeight()));
                document.add(new Paragraph("Weight: " + history.getWeight()));
                document.add(new Paragraph("Symptoms: " + history.getSymptoms()));
                document.add(new Paragraph("Prescription: " + history.getPrescription()));
           
               // document.add(new Paragraph("Suggestion: " + history.getSuggestion()));
                document.add(new Paragraph("  "
                		+ "  "));
             

            }
     
            document.close();
        } catch (Exception e) {
            e.printStackTrace();
            response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        }
	}else {
		throw new Exception("invalid token");
	}
    	
    	
    }
    
    @PostMapping("/paymentGateway")
    @ResponseBody
    public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
        System.out.println(data);

        int amount = Integer.parseInt(data.get("fees").toString());

        RazorpayClient client = new RazorpayClient("rzp_test_HhgkYLDKc9OTjS", "d64JmG8AgZMgOEI2jZow1Ykd");

        JSONObject options = new JSONObject();
        options.put("amount", amount * 100); // Amount should be provided instead of fees
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");
        
        Order order = client.Orders.create(options); // Use uppercase Orders instead of orders
        System.out.println(order);
        return order.toString();
    }
    
    
    
    
    
    
    
   
    
    @GetMapping("/getAppointmentsByDoctorId/{doctorId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDoctorId(@PathVariable int doctorId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
        try {
        	System.out.println("autharization header  "+authorizationHeader);
        	//----------------------------------------------------------verification happens here--------------------------------------
				boolean isValidToken = verifyJwtToken(authorizationHeader);
			if(isValidToken) {//------------------------if true starts the process--------------------------------------
				 List<Appointment> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
		            return ResponseEntity.ok(appointments);
			}else {
				throw new Exception("invalid token");
			}
           
        } catch (AppointmentServiceException e) {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
		
    }
}