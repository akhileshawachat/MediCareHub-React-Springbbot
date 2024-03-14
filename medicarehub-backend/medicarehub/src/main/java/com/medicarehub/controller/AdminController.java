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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.medicarehub.dto.BookingStatus;
import com.medicarehub.dto.LoginStatus;
import com.medicarehub.dto.RegistrationStatus;
import com.medicarehub.dto.RemovingStatus;
import com.medicarehub.entity.Admin;
import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.AdminServiceException;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.exception.DoctorServiceException;
import com.medicarehub.service.AdminService;
import com.medicarehub.service.PatientService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
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
		          
		            return false;
		        }

		        return true;
		    }
	
	
	//---------------------------jwt method-----------------------------------------
//		@Value("${JWTSecret}")
//		private String jwtSecret;
		
		@Value("${JWTExpiration}")
		private long jwtExpiration;

		public String generateJwtToken(Admin admin) {
	        Map<String, Object> claims = new HashMap<>();
	        return Jwts.builder()
	                .setClaims(claims)
	                .setSubject(admin.getPhone())
	                .setIssuedAt(new Date(System.currentTimeMillis()))
	                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
	                .signWith(SignatureAlgorithm.HS512, jwtSecret)
	                .compact();
	    }
	

//		@PostMapping("/register")
//		public RegistrationStatus register(@RequestBody Admin admin) {
//			
//			try {
//				int id = adminService.register(admin);
//				
//				RegistrationStatus status = new RegistrationStatus();
//				status.setStatus(true);
//				status.setStatusMessage("Doctor Registered Successfully!");
//				status.setPatientId(id);
//				
//				return status;
//			}
//			catch (DoctorServiceException e) {
//				RegistrationStatus status = new RegistrationStatus();
//				status.setStatus(false);
//				status.setStatusMessage(e.getMessage());
//				return status;
//			}
//		}
		

	@PostMapping("/adminLogin")
	public LoginStatus login(@RequestBody Admin admin) throws Exception {
		try {
			
			
Admin ad = adminService.login(admin);
			
			LoginStatus status = new LoginStatus();
			
			String token = generateJwtToken(admin);
			status.setLoginId(ad.getId());
			status.setLoginName(ad.getName());
			status.setLoginPhone(ad.getPhone());
			status.setLoginEmail(ad.getEmail());
			status.setLoginGender(ad.getGender());
			status.setLoginCity(ad.getCity());
			status.setLoginStatus(true);
			status.setToken(token);
			status.setLoginStatusMessage("Login Successfully!");
			
			return status;
		
			
		}
		catch (AdminServiceException e) {
			LoginStatus  status = new LoginStatus ();
			status.setLoginStatus(false);
			status.setLoginStatusMessage(e.getMessage());
			return status;
		}
		
		 
	}
	
	
	@GetMapping("/fetchPatients")
    public ResponseEntity<List<Patient>> getAllPatients(@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
        try {
        	//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			List<Patient> patients = adminService.getAllPatients();
            return ResponseEntity.ok(patients);
		}else {
			throw new Exception("invalid token");
		}
            
        } catch (AdminServiceException e) {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
	
	@GetMapping("/fetchDoctors")
    public ResponseEntity<List<Doctor>> getAllDoctors(@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
        try {
        	//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			 List<Doctor> doctors = adminService.getAllDoctors();
	            return ResponseEntity.ok(doctors);
		}else {
			throw new Exception("invalid token");
		}
           
        } catch (AdminServiceException e) {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
	
	@GetMapping("/fetchAdmins")
    public ResponseEntity<List<Admin>> getAllAdmins(@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
        try {
        	//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			List<Admin> admins = adminService.getAllAdmins();
            return ResponseEntity.ok(admins);
		}else {
			throw new Exception("invalid token");
		}
            
        } catch (AdminServiceException e) {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
	
	@DeleteMapping("/removePatient/{patientId}")
    public RemovingStatus removePatient(@PathVariable int patientId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		//----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		boolean removingStatus= adminService.deletePatientById(patientId);
    	RemovingStatus status=new RemovingStatus();
		//status.setBookingId(appointmentStatus.getId());
		status.setRemovingStatus(true);
		status.setRemovingStatusMessage("User deleted Successfully!");
		return status; 
	}else {
		throw new Exception("invalid token");
	}
		
    }
	
	@DeleteMapping("/removeDoctor/{doctorId}")
    public RemovingStatus removeDoctor(@PathVariable int doctorId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		//----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		boolean removingStatus= adminService.deleteDoctorById(doctorId);
    	RemovingStatus status=new RemovingStatus();
		//status.setBookingId(appointmentStatus.getId());
		status.setRemovingStatus(true);
		status.setRemovingStatusMessage("User deleted Successfully!");
		return status;
	}else {
		throw new Exception("invalid token");
	}
		 
    }
	
	@DeleteMapping("/removeAdmin/{adminId}")
    public RemovingStatus removeAdmin(@PathVariable int adminId,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		//----------------------------------------------------------verification happens here--------------------------------------
		boolean isValidToken = verifyJwtToken(authorizationHeader);
	if(isValidToken) {//------------------------if true starts the process--------------------------------------
		boolean removingStatus= adminService.deleteAdminId(adminId);
    	RemovingStatus status=new RemovingStatus();
		//status.setBookingId(appointmentStatus.getId());
		status.setRemovingStatus(true);
		status.setRemovingStatusMessage("User deleted Successfully!");
		return status;
	}else {
		throw new Exception("invalid token");
	}
		 
    }
	
	
	
	
}
