package com.medicarehub.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicarehub.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	
	public Optional<Doctor> findByPhone(String phone);
//	public Optional<Doctor> findById(int id);
	

}