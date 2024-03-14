package com.medicarehub.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

@Entity
@Table
public class Appointment {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointId")
    private int id;

    @NotNull
    private LocalDate appdate;

    @NotBlank
    private String apptime;

    @NotBlank
    @Size(max = 255)
    private String symptoms;

    @Positive
    private int height;

    @Positive
    private int weight;

    @Size(max = 255)
    private String prescription;

    
	
	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getApptime() {
		return apptime;
	}

	public void setApptime(String apptime) {
		this.apptime = apptime;
	}

	@ManyToOne
	@JoinColumn(name="doctorId")
	
	private Doctor doctor;
	
	@ManyToOne
	@JoinColumn(name="patientId")
	
	private Patient patient;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getAppdate() {
		return appdate;
	}

	public void setAppdate(LocalDate appdate) {
		this.appdate = appdate;
	}

	
	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
	
}
