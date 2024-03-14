package com.medicarehub.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.medicarehub.dto.LoginStatus;
import com.medicarehub.dto.RegistrationStatus;
import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.PatientServiceException;
import com.medicarehub.exception.DoctorServiceException;
import com.medicarehub.service.AppointmentService;
import com.medicarehub.service.DoctorService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin
public class DoctorController {
	
	@Autowired
	public DoctorService doctorService;
	
	@Autowired
	public AppointmentService appointmnrtService;
	
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
	
	
	
	//---------------------------jwt method-----------------------------------------
//	@Value("${JWTSecret}")
//	private String jwtSecret;
	
	@Value("${JWTExpiration}")
	private long jwtExpiration;

	public String generateJwtToken(Doctor doctor) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(doctor.getPhone())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
	
//	
//	@PostMapping("/register")
//	public RegistrationStatus register(@RequestBody Doctor doctor) {
//		
//		try {
//			int id = doctorService.register(doctor);
//			
//			RegistrationStatus status = new RegistrationStatus();
//			status.setStatus(true);
//			status.setStatusMessage("Doctor Registered Successfully!");
//			status.setPatientId(id);
//			
//			return status;
//		}
//		catch (DoctorServiceException e) {
//			RegistrationStatus status = new RegistrationStatus();
//			status.setStatus(false);
//			status.setStatusMessage(e.getMessage());
//			return status;
//		}
//	}
//	
	
	@PostMapping("/doctorLogin")
	public LoginStatus login(@RequestBody Doctor doctor) {
		try {
			Doctor dr = doctorService.login(doctor);
			String token = generateJwtToken(doctor);
			LoginStatus status = new LoginStatus();
			status.setLoginId(dr.getId());
			status.setLoginName(dr.getName());
			status.setLoginPhone(dr.getPhone());
			status.setLoginEmail(dr.getEmail());
			status.setLoginGender(dr.getGender());
			status.setLoginCity(dr.getCity());
			status.setLoginStatus(true);
			status.setToken(token);
			status.setLoginStatusMessage("Login Successfully!");
			
			return status;
		}
		catch (DoctorServiceException e) {
			LoginStatus  status = new LoginStatus ();
			status.setLoginStatus(false);
			status.setLoginStatusMessage(e.getMessage());
			return status;
		}
	}
	
	
	@GetMapping("/getAllDoctors")
	public List <Doctor> getAllDoctors(@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		try {
			//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			List <Doctor> doctors=doctorService.getAllDoctors();
			return doctors;
		}else {
			throw new Exception("invalid token");
		}
		
	}
	catch(DoctorServiceException e) {
		return null;
	}
		
	}
	
	
	@PostMapping("/getTimeSlot")
	public List <String> getTimeSlot(@RequestBody Appointment appointment,@RequestHeader(name = "Authorization") String authorizationHeader) throws Exception {
		try {
			//----------------------------------------------------------verification happens here--------------------------------------
			boolean isValidToken = verifyJwtToken(authorizationHeader);
		if(isValidToken) {//------------------------if true starts the process--------------------------------------
			List <String> timeSlot = appointmnrtService.getTimeSlotByDoctorAndDate(appointment);
			
			return timeSlot;
		}else {
			throw new Exception("invalid token");
		}
		
	}
	catch(DoctorServiceException e) {
		return null;
	}
		
	}
}
