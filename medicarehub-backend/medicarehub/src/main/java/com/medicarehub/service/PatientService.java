package com.medicarehub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.exception.PatientServiceException;
import com.medicarehub.repository.AppointmentRepository;
import com.medicarehub.repository.PatientRepository;

@Service
public class PatientService {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	public int register(Patient patient) {
	
		Optional<Patient> patientCheck = patientRepository.findByPhone(patient.getPhone());
		
		if(patientCheck.isEmpty()) {
			Patient savedPatient = patientRepository.save(patient);
			return savedPatient.getId();
		}
		else {
			throw new PatientServiceException("Patient already registered !");
		}
	}
	
	
	
	public Patient login(Patient patient) {
	    Optional<Patient> patientCheck = patientRepository.findByPhone(patient.getPhone());

	    if (patientCheck.isEmpty()) {
	        throw new PatientServiceException("Patient doesn't exist");
	    } else {
	        Patient existingPatient = patientCheck.get();
	        if (patient.getPassword().equals(existingPatient.getPassword()) && patient.getEmail().equals(existingPatient.getEmail())) {
	            return existingPatient;
	        }
	    }

	    throw new PatientServiceException("Incorrect email or password");
	}
	
	
	public List<Appointment> getAppointmentsByPatientId(int patientId) {
        List<Appointment> list = appointmentRepository.getAppointmentsByPatientId(patientId);
        if (list.isEmpty()) {
            throw new AppointmentServiceException("No appointments found!!!: ");
        } else {
            return list;
        }
    }
	
	@Transactional
    public Appointment updatePatientAppointment(int patientId, Appointment updateAppointment) {
		
        Optional<Appointment> patientAppointment = appointmentRepository.findByPatientIdAndAppointmentId(patientId, updateAppointment.getId());

        if (patientAppointment.isPresent()) {
            Appointment appointment = patientAppointment.get();
        
            appointment.setAppdate(updateAppointment.getAppdate());
            appointment.setApptime(updateAppointment.getApptime());
           appointment.setSymptoms(updateAppointment.getSymptoms());
           appointment.setWeight(updateAppointment.getWeight());
           appointment.setHeight(updateAppointment.getHeight());

            return appointmentRepository.save(appointment);
        } else {
            
            throw new AppointmentServiceException("Appointment not found with ID: ");
        }
    }
	
	@Transactional
    public boolean deleteAppointmentByPatient(int appointmentId) {
        try {
            appointmentRepository.deleteById(appointmentId);
            return true;
        } catch (Exception e) {
 
            return false;
        }
   }	
	
	@Transactional
    public Patient updatePatient(Patient updatePatient) {
		
        Optional<Patient> patientdata = patientRepository.findById(updatePatient.getId());

        if (patientdata.isPresent()) {
            Patient patient = patientdata.get();
        
            patient.setName(updatePatient.getName());
            patient.setPhone(updatePatient.getPhone());
            patient.setEmail(updatePatient.getEmail());
            patient.setGender(updatePatient.getGender());
            patient.setCity(updatePatient.getCity());
            patient.setDateOfBirth(updatePatient.getDateOfBirth());
            patient.setPassword(updatePatient.getPassword());

            return patientRepository.save(patient);
        } else {
            
            throw new PatientServiceException("patient not found");
        }
   }
	public Patient fetchByPatientId(int patientId) {
		Optional<Patient> patient = patientRepository.findById(patientId);
        if ( patient.isEmpty()) {
            throw new PatientServiceException("No patients found!!!: ");
        } else {
            return patient.get() ;
        }
    }
	
}