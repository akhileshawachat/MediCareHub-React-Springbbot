package com.medicarehub.exception;

public class PatientServiceException extends RuntimeException {
	
	public PatientServiceException() {
		super();
	}
	public PatientServiceException(String message) {
		super(message);
	} 
	public PatientServiceException(String message, Throwable cause) {
		super(message,cause);
	}
}
