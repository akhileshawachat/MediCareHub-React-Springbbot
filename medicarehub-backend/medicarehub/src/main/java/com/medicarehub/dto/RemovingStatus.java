package com.medicarehub.dto;

public class RemovingStatus {
	
	private int id;
	private boolean removingStatus;
	private String removingStatusMessage;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isRemovingStatus() {
		return removingStatus;
	}
	public void setRemovingStatus(boolean removingStatus) {
		this.removingStatus = removingStatus;
	}
	public String getRemovingStatusMessage() {
		return removingStatusMessage;
	}
	public void setRemovingStatusMessage(String removingStatusMessage) {
		this.removingStatusMessage = removingStatusMessage;
	}

}
