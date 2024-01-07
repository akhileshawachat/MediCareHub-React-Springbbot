package com.medicarehub.exception;

public class AppointmentServiceException extends RuntimeException {

	public AppointmentServiceException(){
		super();
	}
	public AppointmentServiceException(String message){
		super(message);
	}
	public AppointmentServiceException(String message, Throwable cause) {
		super(message,cause);
	}
}
