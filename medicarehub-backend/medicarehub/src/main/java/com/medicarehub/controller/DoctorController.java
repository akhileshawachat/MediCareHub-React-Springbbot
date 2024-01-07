package com.medicarehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicarehub.dto.LoginStatus;
import com.medicarehub.entity.Doctor;
import com.medicarehub.exception.PatientServiceException;
import com.medicarehub.exception.DoctorServiceException;
import com.medicarehub.service.DoctorService;

@RestController
@CrossOrigin
public class DoctorController {
	
	@Autowired
	public DoctorService doctorService;
	
	@PostMapping("/doctorLogin")
	public LoginStatus login(@RequestBody Doctor doctor) {
		try {
			Doctor dr = doctorService.login(doctor);
			
			LoginStatus status = new LoginStatus();
			status.setLoginId(dr.getId());
			status.setLoginName(dr.getName());
			status.setLoginPhone(dr.getPhone());
			status.setLoginEmail(dr.getEmail());
			status.setLoginGender(dr.getGender());
			status.setLoginCity(dr.getCity());
			status.setLoginStatus(true);
			status.setLoginStatusMessage("Login Successfully!");
			
			return status;
		}
		catch (PatientServiceException e) {
			LoginStatus  status = new LoginStatus ();
			status.setLoginStatus(false);
			status.setLoginStatusMessage(e.getMessage());
			return status;
		}
	}
	
	
	@GetMapping("/getAllDoctors")
	public List <Doctor> getAllDoctors() {
		try {
		List <Doctor> doctors=doctorService.getAllDoctors();
		return doctors;
	}
	catch(DoctorServiceException e) {
		return null;
	}
		
	}
}
