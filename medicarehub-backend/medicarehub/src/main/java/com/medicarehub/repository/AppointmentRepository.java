package com.medicarehub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.medicarehub.entity.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{
	
	
	 @Query("SELECT a FROM Appointment a WHERE a.doctor.id = :doctorId")
	 List<Appointment> getAppointmentsByDoctorId(@Param("doctorId") int doctorId);
	
	 @Query("SELECT a FROM Appointment a WHERE a.doctor.id = :doctorId and a.id= :appointId")
	 Optional<Appointment> findByDoctorIdAndAppointmentId(@Param("doctorId") int doctorId,@Param("appointId") int appointId);
	 
	 @Query("SELECT a FROM Appointment a WHERE a.patient.id = :patientId")
	 List<Appointment> getAppointmentsByPatientId(@Param("patientId") int patientId);
	 
	 @Query("SELECT a FROM Appointment a WHERE a.patient.id = :patientId and a.id= :appointId")
	 Optional<Appointment> findByPatientIdAndAppointmentId(@Param("patientId") int patientId,@Param("appointId") int appointId);
		 
}