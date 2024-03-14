package com.medicarehub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicarehub.entity.Admin;
import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;
import com.medicarehub.exception.AdminServiceException;
import com.medicarehub.exception.AppointmentServiceException;
import com.medicarehub.exception.DoctorServiceException;
import com.medicarehub.exception.PatientServiceException;
import com.medicarehub.repository.AdminRepository;
import com.medicarehub.repository.DoctorRepository;
import com.medicarehub.repository.PatientRepository;

@Service
public class AdminService {
	
	@Autowired
	public AdminRepository adminRepository;
	
	@Autowired
	public DoctorRepository doctorRepository;
	
	@Autowired
	public PatientRepository patientRepository;
	
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
public int register(Admin admin) {
		
		Optional<Admin> adminCheck = adminRepository.findByEmail(admin.getEmail());
		
		if(adminCheck.isEmpty()) {
			String password = admin.getPassword();
			String encodedPassword = passwordEncoder.encode(password);
			admin.setPassword(encodedPassword);

			Admin savedAdmin = adminRepository.save(admin);
			return savedAdmin.getId();
		}
		else {
			throw new PatientServiceException("Patient already registered !");
		}
	}

	
	public Admin login(Admin admin) {
	    Optional<Admin> adminCheck = adminRepository.findByEmail(admin.getEmail());

	    if (adminCheck.isEmpty()) {
	        throw new AdminServiceException("Admin doesn't exist");
	    } else {
	        Admin existingAdmin = adminCheck.get();
	        if((passwordEncoder.matches(admin.getPassword(), existingAdmin.getPassword())) && (admin.getEmail().equals(existingAdmin.getEmail()))) {
	            return existingAdmin;
	        }
	    }

	    throw new AdminServiceException("Incorrect email or password");
	}
	
	
	 public List<Patient> getAllPatients() {
	        List<Patient> list = adminRepository.getAllPatients();
	        if (list.isEmpty()) {
	            throw new AppointmentServiceException("No patients dound ");
	        } else {
	            return list;
	        }
	    }
	 
	 public List<Doctor> getAllDoctors() {
	        List<Doctor> list = adminRepository.getAllDoctors();
	        if (list.isEmpty()) {
	            throw new AppointmentServiceException("No doctors found");
	        } else {
	            return list;
	        }
	    }
	 
	 public List<Admin> getAllAdmins() {
	        List<Admin> list = adminRepository.getAllAdmins();
	        if (list.isEmpty()) {
	            throw new AppointmentServiceException("No Admins found ");
	        } else {
	            return list;
	        }
	    }
	
		/*
		 * public List<Patient> fetchAll(){ return patientRepository.findAll(); }
		 */
	 
	 @Transactional
	    public boolean deleteDoctorById(int doctorId) {
	        try {
	            doctorRepository.deleteById(doctorId);
	            return true;
	        } catch (Exception e) {
	 
	            return false;
	        }
	   }
	 
	 @Transactional
	    public boolean deleteAdminId(int adminId) {
	        try {
	            adminRepository.deleteById(adminId);
	            return true;
	        } catch (Exception e) {
	 
	            return false;
	        }
	   }
	 
	 @Transactional
	    public boolean deletePatientById(int patientId) {
	        try {
	            patientRepository.deleteById(patientId);
	            return true;
	        } catch (Exception e) {
	 
	            return false;
	        }
	   }

}
