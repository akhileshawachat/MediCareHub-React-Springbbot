package com.medicarehub.service;

import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.repository.AppointmentRepository;
import com.medicarehub.repository.DoctorRepository;
import com.medicarehub.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AppointmentService {
	
	@Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @Transactional
    public Appointment bookAppointment(Appointment appointment, int patientId, int doctorId) {
    	
        Optional<Patient> existingPatient = patientRepository.findById(patientId);
        Optional<Doctor> existingDoctor = doctorRepository.findById(doctorId);
        System.out.println(existingPatient.get().getName());
        System.out.println(existingDoctor.get().getName());
        if (existingPatient.isPresent()) {
        	
            appointment.setPatient(existingPatient.get());
            appointment.setDoctor(existingDoctor.get());
            Appointment savedAppointment=appointmentRepository.save(appointment);
            return savedAppointment;
        } else {
        	throw new AppointmentServiceException("Patient not found with ID: " + patientId);
        }
        
    }
    
    
    public List<Appointment> getAppointmentsByDoctorId(int doctorId) {
        List<Appointment> list = appointmentRepository.getAppointmentsByDoctorId(doctorId);
        if (list.isEmpty()) {
            throw new AppointmentServiceException("No appointments found for doctorId: " + doctorId);
        } else {
            return list;
        }
    }
    
    
    public List<Appointment> fetchAll(){
    	return appointmentRepository.findAll();
    }

    @Transactional
    public Appointment updateAppointment(int doctorId, Appointment updatedAppointment) {
        Optional<Appointment> patientAppointment = appointmentRepository.findByDoctorIdAndAppointmentId(doctorId,updatedAppointment.getId());

        if (patientAppointment.isPresent()) {
            Appointment appointment = patientAppointment.get();
//        
            appointment.setAppdate(updatedAppointment.getAppdate());
            appointment.setApptime(updatedAppointment.getApptime());
            appointment.setSymptoms(updatedAppointment.getSymptoms());
            appointment.setWeight(updatedAppointment.getWeight());
            appointment.setHeight(updatedAppointment.getHeight());
            appointment.setPrescription(updatedAppointment.getPrescription());

            return appointmentRepository.save(appointment);
        } else {
            
            throw new AppointmentServiceException("Appointment not found ");
        }
    }

    @Transactional
    public boolean deleteAppointmentByDoctor(int appointmentId) {
        try {
            appointmentRepository.deleteById(appointmentId);
            return true;
        } catch (Exception e) {
 
            return false;
        }
       
   }
    
    public List<String> getTimeSlotByDoctorAndDate(Appointment appointment) {

        List<Appointment> list = appointmentRepository.findTimeSlotByDoctorAndDate(appointment.getDoctor().getId(), appointment.getAppdate());
        List<String> timeToSend = new ArrayList<>();

        if (list.isEmpty()) {
            // If no appointments found, assume all time slots are available
            return Arrays.asList("9:00 AM", "11:00 AM", "12:00 PM", "1:00 PM");
        } else {
            // Extract time slots from the list of appointments
            List<String> existingTimeSlots = list.stream()
                    .map(Appointment::getApptime)
                    .collect(Collectors.toList());

            // Check and add missing time slots
            addIfMissing(existingTimeSlots, "9:00 AM", timeToSend);
            addIfMissing(existingTimeSlots, "11:00 AM", timeToSend);
            addIfMissing(existingTimeSlots, "12:00 PM", timeToSend);
            addIfMissing(existingTimeSlots, "1:00 PM", timeToSend);

            return timeToSend;
        }}

    private void addIfMissing(List<String> existingTimeSlots, String timeSlot, List<String> timeToSend) {
        if (!existingTimeSlots.contains(timeSlot)) {
            timeToSend.add(timeSlot);
        }
    }

    
    
    public List<Appointment> getMedicalHistoryByPatientId(int patientId) {
		List<Appointment> list = appointmentRepository.getAppointmentsByPatientId(patientId);
        if ( list.isEmpty()) {
            throw new AppointmentServiceException("No patient Medical History found!!!: ");
        } else {
            return list;
        }
    }
    
    
}