package com.medicarehub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicarehub.entity.Doctor;
import com.medicarehub.exception.DoctorServiceException;

import com.medicarehub.repository.DoctorRepository;

@Service
public class DoctorService {
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	public Doctor login(Doctor doctor) {
	    Optional<Doctor> doctorCheck = doctorRepository.findByPhone(doctor.getPhone());

	    if (doctorCheck.isEmpty()) {
	        throw new DoctorServiceException("Doctor doesn't exist");
	    } else {
	        Doctor existingDoctor = doctorCheck.get();
	        if (doctor.getPassword().equals(existingDoctor.getPassword()) && doctor.getEmail().equals(existingDoctor.getEmail())) {
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
