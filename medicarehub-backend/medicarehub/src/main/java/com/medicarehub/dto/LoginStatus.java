package com.medicarehub.dto;

public class LoginStatus {
	
	private int loginId;
	private String loginName;
	private String loginPhone;
	private String loginEmail;
	private String loginGender;
	private String loginCity;
	
	private boolean loginStatus;
	private String loginStatusMessage;
	
	
	public String getLoginName() {
		return loginName;
	}
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	public String getLoginPhone() {
		return loginPhone;
	}
	public void setLoginPhone(String loginPhone) {
		this.loginPhone = loginPhone;
	}
	public String getLoginEmail() {
		return loginEmail;
	}
	public void setLoginEmail(String loginEmail) {
		this.loginEmail = loginEmail;
	}
	public String getLoginGender() {
		return loginGender;
	}
	public void setLoginGender(String loginGender) {
		this.loginGender = loginGender;
	}
	public String getLoginCity() {
		return loginCity;
	}
	public void setLoginCity(String loginCity) {
		this.loginCity = loginCity;
	}
	
	
	
	public boolean isLoginStatus() {
		return loginStatus;
	}
	public void setLoginStatus(boolean loginStatus) {
		this.loginStatus = loginStatus;
	}
	public String getLoginStatusMessage() {
		return loginStatusMessage;
	}
	public void setLoginStatusMessage(String loginStatusMessage) {
		this.loginStatusMessage = loginStatusMessage;
	}
	public int getLoginId() {
		return loginId;
	}
	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}
	
}
