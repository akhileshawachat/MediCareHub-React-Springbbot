package com.medicarehub.exception;

public class AdminServiceException extends RuntimeException {
	public AdminServiceException() {
		super();
	}
	public AdminServiceException(String message) {
		super(message);
	} 
	public AdminServiceException(String message, Throwable cause) {
		super(message,cause);
	}

}
