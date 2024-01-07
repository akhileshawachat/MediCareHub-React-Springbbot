package com.medicarehub.controller;

import com.medicarehub.dto.BookingStatus;
import com.medicarehub.entity.Appointment;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.service.AppointmentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin
public class AppointmentController {

	@Autowired
    private AppointmentService appointmentService;

    @PostMapping("/bookAppointment")
    public BookingStatus bookAppointment(@RequestBody Appointment appointment, @RequestParam int patientId, @RequestParam int doctorId) {
       
    	try{
    		Appointment savedAppointment=appointmentService.bookAppointment(appointment, patientId, doctorId);
    		BookingStatus status=new BookingStatus();
    		status.setBookingId(savedAppointment.getId());
    		status.setBookingStatus(true);
    		status.setBookingStatusMessage("Booking Successfull!");
    		
    		return status;
    	}
    	catch(AppointmentServiceException e){
    		BookingStatus status=new BookingStatus();
    		status.setBookingStatus(false);
    		status.setBookingStatusMessage("Booking Failed!");
    		return status;
    	}
        
        
    }
        
    
    @GetMapping("/getAppointmentsByDoctorId/{doctorId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDoctorId(@PathVariable int doctorId) {
        try {
            List<Appointment> appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
            return ResponseEntity.ok(appointments);
        } catch (AppointmentServiceException e) {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
    @GetMapping("/fetchAllApointments")
    public List<Appointment> fetchAll(){
    	return appointmentService.fetchAll();
    }

   @PutMapping("/updateByDoctor/{doctorId}")
   public BookingStatus updateAppointment(@PathVariable int doctorId, @RequestBody Appointment updatedAppointment) {

	    Appointment appointmentStatus= appointmentService.updateAppointment(doctorId, updatedAppointment);
	    BookingStatus status=new BookingStatus();
		status.setBookingId(appointmentStatus.getId());
		status.setBookingStatus(true);
		status.setBookingStatusMessage("Appointment updated Successfull!");
		return status; 

   }
    @DeleteMapping("/rejectAppointmentByDoctor/{appointmentId}")
    public BookingStatus rejectAppointmentByDoctor(@PathVariable int appointmentId) {
    	boolean appointmentStatus= appointmentService.deleteAppointmentByDoctor(appointmentId);
        BookingStatus status=new BookingStatus();
		//status.setBookingId(appointmentStatus.getId());
		status.setBookingStatus(true);
		status.setBookingStatusMessage("Appointment deleted Successfully!");
		return status; 
    }
    
   
    
}