package com.medicarehub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.medicarehub.entity.Admin;
import com.medicarehub.entity.Appointment;
import com.medicarehub.entity.Doctor;
import com.medicarehub.entity.Patient;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	//public Optional<Admin> findByPhone(String phone);
	
	public Optional<Admin> findByEmail(String email);
	
	@Query("SELECT a FROM Patient a ")
	 List<Patient> getAllPatients();
	
	@Query("SELECT a FROM Doctor a ")
	 List<Doctor> getAllDoctors();
	
	@Query("SELECT a FROM Admin a ")
	 List<Admin> getAllAdmins();
	
	

}
