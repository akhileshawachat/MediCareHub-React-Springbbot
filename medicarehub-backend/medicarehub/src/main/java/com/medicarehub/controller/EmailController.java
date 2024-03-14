package com.medicarehub.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicarehub.dto.EmailMessage;
import com.medicarehub.service.EmailSenderService;

@RestController
@CrossOrigin
public class EmailController {

	private final EmailSenderService emailSenderService;

	public EmailController(EmailSenderService emailSenderService) {
		this.emailSenderService = emailSenderService;
	}

	@PostMapping("/send-email")
	public ResponseEntity sendEmail(@RequestBody EmailMessage emailMessage) {			//responseEntity is in built class in httpResponse
		this.emailSenderService.sendEmail(emailMessage.getTo(), emailMessage.getSubject(), emailMessage.getMessage());
		return ResponseEntity.ok("Success");
	}
}
