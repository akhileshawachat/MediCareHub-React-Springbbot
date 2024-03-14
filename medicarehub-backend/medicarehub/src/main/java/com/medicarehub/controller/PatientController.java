package com.medicarehub.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.medicarehub.dto.BookingStatus;
import com.medicarehub.dto.LoginStatus;
import com.medicarehub.dto.PatientUpdateStatus;
import com.medicarehub.dto.RegistrationStatus;
import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.exception.PatientServiceException;
import com.medicarehub.service.PatientService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin
public class PatientController {

	@Autowired
	private PatientService patientService;
	
//	@Value("${JWTSecret}")
//	private String jwtSecret;
	
	@Value("${JWTExpiration}")
	private long jwtExpiration;
	
	public static String jwtSecret= "19cb1666f0b2153fccc19824e3cf828ca65db3706cc5b83e2228165b627c742d766712b689438d0130b1c984f1ca38dd187e083a65b67de6ab41c54ba5b94c44" ;

	public String generateJwtToken(Patient patient) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(patient.getPhone())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
	
	
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
	    
	
	@PostMapping("/register")
	public RegistrationStatus register(@RequestBody Patient patient) {
		
		try {
			int id = patientService.register(patient);
			
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setStatusMessage("Patient Registered Successfully!");
			status.setPatientId(id);
			
			return status;
		}
		catch (PatientServiceException e) {
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			return status;
		}
	}
	@PostMapping("/patientLogin")
	public LoginStatus login(@RequestBody Patient patient) {
		try {
			Patient pt = patientService.login(patient);
			String token = generateJwtToken(patient);
			
			LoginStatus status = new LoginStatus();
			status.setLoginId(pt.getId());
			status.setLoginName(pt.getName());
			status.setLoginPhone(pt.getPhone());
			status.setLoginEmail(pt.getEmail());
			status.setLoginGender(pt.getGender());
			status.setLoginCity(pt.getCity());
			status.setLoginStatus(true);
			status.setToken(token);
			status.setLoginStatusMessage("Login Successfully!");
			System.out.println("ttoken to be genertated  "+token);
			
			return status;
			
		}
		catch (PatientServiceException e) {
			LoginStatus  status = new LoginStatus ();
			status.setLoginStatus(false);
			status.setLoginStatusMessage(e.getMessage());
			return status;
		}
	}
	
	@GetMapping("/getAppointmentsByPatientId/{patientId}")
	public List<Appointment> fetchPatientAppointments(@PathVariable int patientId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		try {
			//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			List<Appointment> appointments = patientService.getAppointmentsByPatientId(patientId);
            return appointments;
		}else {
			throw new Exception("invalid token");
		}
           
        } catch (AppointmentServiceException e) {
        	
            return null;
        }
    }
	 @PutMapping("/updateByPatient/{patientId}")
	   public BookingStatus updateAppointment(@PathVariable int patientId, @RequestBody Appointment updateAppointment,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		 
		//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			Appointment appointmentStatus= patientService.updatePatientAppointment(patientId, updateAppointment);
		    BookingStatus status=new BookingStatus();
			status.setBookingId(appointmentStatus.getId());
			status.setBookingStatus(true);
			status.setBookingStatusMessage("Appointment updated Successfull!");
			return status;
		}else {
			throw new Exception("invalid token");
		}

		     

	   }
	    @DeleteMapping("/deleteAppointmentByPatient/{patientId}")
	    public BookingStatus deleteAppointment(@PathVariable int patientId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
	    	
	    	//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			boolean appointmentStatus= patientService.deleteAppointmentByPatient(patientId);
	        BookingStatus status=new BookingStatus();
			//status.setBookingId(appointmentStatus.getId());
			status.setBookingStatus(true);
			status.setBookingStatusMessage("Appointment deleted Successfully!");
			return status; 
		}else {
			throw new Exception("invalid token");
		}
	    	
	    }
	    
	    @PutMapping("/updateByPatient")
		public PatientUpdateStatus updateByPatient(@RequestBody Patient patient,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
			
	    	//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			Patient patientupdated = patientService.updatePatient(patient);
			
			PatientUpdateStatus status = new PatientUpdateStatus();
			status.setUpdateStatus(true);
			status.setUpdateStatusMessage("Patient updated successfully!");
			status.setPatientId(patientupdated.getId());
			return status;
		}else {
			throw new Exception("invalid token");
		}
				
			
		}
	    
	    @GetMapping("/fetchPatientById/{patientId}")
		public Patient fetchPatient(@PathVariable int patientId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
			try {
				//----------------------------------------------------------verification happens here--------------------------------------
				boolean isValidToken = verifyJwtToken(authorizationHeader);
			if(isValidToken) {//------------------------if true starts the process--------------------------------------
				 Patient patient = patientService.fetchByPatientId(patientId);
		            return patient;
			}else {
				throw new Exception("invalid token");
			}
	           
	        } catch (PatientServiceException e ) {
	        	
	            return null;
	        }
	    }
	
}