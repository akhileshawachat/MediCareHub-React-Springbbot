package com.medicarehub.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
public class Admin {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "adminId")
	    private int id;

	    @NotBlank(message = "Name cannot be blank")
	    @Size(max = 255, message = "Name must be less than 255 characters")
	    private String name;

	    @NotBlank(message = "Phone cannot be blank")
	    @Pattern(regexp = "^\\d{10}$", message = "Phone must be a 10-digit number")
	    private String phone;

	    @NotBlank(message = "Email cannot be blank")
	    @Email(message = "Invalid email format")
	    private String email;

	    @NotBlank(message = "Gender cannot be blank")
	    private String gender;

	    @NotBlank(message = "City cannot be blank")
	    @Size(max = 255, message = "City must be less than 255 characters")
	    private String city;

	    @Past(message = "Date of Birth must be in the past")
	    private LocalDate dateOfBirth;

	    @NotBlank(message = "Password cannot be blank")
	    @Size(min = 8, message = "Password must be at least 8 characters")
	    private String password;
	    
	    
	    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
}
