package com.medicarehub.dto;

public class PatientUpdateStatus {
	
	private int patientId;
	private boolean updateStatus;
	private String updateStatusMessage;
	
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public boolean isUpdateStatus() {
		return updateStatus;
	}
	public void setUpdateStatus(boolean updateStatus) {
		this.updateStatus = updateStatus;
	}
	public String getUpdateStatusMessage() {
		return updateStatusMessage;
	}
	public void setUpdateStatusMessage(String updateStatusMessage) {
		this.updateStatusMessage = updateStatusMessage;
	}
}
