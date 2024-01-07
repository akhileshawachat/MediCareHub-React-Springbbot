package com.medicarehub.exception;

public class DoctorServiceException extends RuntimeException {
		
		public DoctorServiceException() {
			super();
		}
		public DoctorServiceException(String message) {
			super(message);
		} 
		public DoctorServiceException(String message, Throwable cause) {
			super(message,cause);
		}
}
