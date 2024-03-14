package com.medicarehub.intercepter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;


import java.util.Objects;

import javax.crypto.SecretKey;





@Component
public class TokenVerificationInterceptor implements HandlerInterceptor {

   // private final String jwtSecret = "your-secret-key"; // Replace with your actual secret key
	@Value("${JWTSecret}")
	private String jwtSecret;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("Authorization");

        if (verifyToken(token)) {
            return true; // Continue with the request
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false; // Stop the request processing
        }
    }

    private boolean verifyToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(getSecretKey())
                    .build()
                    .parseClaimsJws(token.replace("Bearer ", "")); // Assuming a Bearer token format
            // Token signature is verified
            return true;
        } catch (Exception e) {
            // Token validation failed
            return false;
        }
    }

    private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }
}
