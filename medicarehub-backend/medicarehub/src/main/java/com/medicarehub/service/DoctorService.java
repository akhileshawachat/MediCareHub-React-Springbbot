package com.medicarehub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.DoctorServiceException;
import com.medicarehub.exception.PatientServiceException;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.medicarehub.repository.DoctorRepository;

@Service
public class DoctorService {
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
//	public int register(Doctor doctor) {
//		
//		Optional<Doctor> doctorCheck = doctorRepository.findByEmail(doctor.getEmail());
//		
//		if(doctorCheck.isEmpty()) {
//			String password = doctor.getPassword();
//			String encodedPassword = passwordEncoder.encode(password);
//			doctor.setPassword(encodedPassword);
//
//			Doctor savedDoctor = doctorRepository.save(doctor);
//			return savedDoctor.getId();
//		}
//		else {
//			throw new PatientServiceException("Patient already registered !");
//		}
//	}
	
	public Doctor login(Doctor doctor) {
	    Optional<Doctor> doctorCheck = doctorRepository.findByEmail(doctor.getEmail());

	    if (doctorCheck.isEmpty()) {
	        throw new DoctorServiceException("Doctor doesn't exist");
	    } else {
	        Doctor existingDoctor = doctorCheck.get();
	       // if((passwordEncoder.matches(patient.getPassword(), existingPatient.getPassword())) && (patient.getEmail().equals(existingPatient.getEmail())))
	        if((passwordEncoder.matches(doctor.getPassword(), existingDoctor.getPassword())) && (doctor.getEmail().equals(existingDoctor.getEmail()))) {
	            return existingDoctor;
	        }
	    }

	    throw new DoctorServiceException("Incorrect email or password");
	}
	
	public List<Doctor> getAllDoctors(){
		List <Doctor> doctors=doctorRepository.findAll();
		return doctors;
	}
}
