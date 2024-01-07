package com.medicarehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

@RestController
@CrossOrigin
public class PatientController {

	@Autowired
	private PatientService patientService;
	
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
			
			LoginStatus status = new LoginStatus();
			status.setLoginId(pt.getId());
			status.setLoginName(pt.getName());
			status.setLoginPhone(pt.getPhone());
			status.setLoginEmail(pt.getEmail());
			status.setLoginGender(pt.getGender());
			status.setLoginCity(pt.getCity());
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
	
	@GetMapping("/getAppointmentsByPatientId/{patientId}")
	public List<Appointment> fetchPatientAppointments(@PathVariable int patientId) {
		try {
            List<Appointment> appointments = patientService.getAppointmentsByPatientId(patientId);
            return appointments;
        } catch (AppointmentServiceException e) {
        	
            return null;
        }
    }
	 @PutMapping("/updateByPatient/{patientId}")
	   public BookingStatus updateAppointment(@PathVariable int patientId, @RequestBody Appointment updateAppointment) {

		    Appointment appointmentStatus= patientService.updatePatientAppointment(patientId, updateAppointment);
		    BookingStatus status=new BookingStatus();
			status.setBookingId(appointmentStatus.getId());
			status.setBookingStatus(true);
			status.setBookingStatusMessage("Appointment updated Successfull!");
			return status; 

	   }
	    @DeleteMapping("/deleteAppointmentByPatient/{patientId}")
	    public BookingStatus deleteAppointment(@PathVariable int patientId) {
	    	boolean appointmentStatus= patientService.deleteAppointmentByPatient(patientId);
	        BookingStatus status=new BookingStatus();
			//status.setBookingId(appointmentStatus.getId());
			status.setBookingStatus(true);
			status.setBookingStatusMessage("Appointment deleted Successfully!");
			return status; 
	    }
	    
	    @PutMapping("/updateByPatient")
		public PatientUpdateStatus updateByPatient(@RequestBody Patient patient) {
			
				Patient patientupdated = patientService.updatePatient(patient);
				
				PatientUpdateStatus status = new PatientUpdateStatus();
				status.setUpdateStatus(true);
				status.setUpdateStatusMessage("Patient updated successfully!");
				status.setPatientId(patientupdated.getId());
				return status;
			
		}
	    
	    @GetMapping("/fetchPatientById/{patientId}")
		public Patient fetchPatient(@PathVariable int patientId) {
			try {
	            Patient patient = patientService.fetchByPatientId(patientId);
	            return patient;
	        } catch (PatientServiceException e ) {
	        	
	            return null;
	        }
	    }
	
}