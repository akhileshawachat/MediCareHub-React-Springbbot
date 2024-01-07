package com.medicarehub.dto;

public class BookingStatus {
	
	private int bookingId;
	private boolean bookingStatus;
	private String bookingStatusMessage;
	
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public boolean isBookingStatus() {
		return bookingStatus;
	}
	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}
	public String getBookingStatusMessage() {
		return bookingStatusMessage;
	}
	public void setBookingStatusMessage(String bookingStatusMessage) {
		this.bookingStatusMessage = bookingStatusMessage;
	}
	
}
