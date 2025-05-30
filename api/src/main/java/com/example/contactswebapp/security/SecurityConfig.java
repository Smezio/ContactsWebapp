package com.example.contactswebapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        return http
                .authorizeHttpRequests((authorize) -> authorize
                    .requestMatchers(HttpMethod.GET, "/api/contacts").authenticated()
                    .requestMatchers(HttpMethod.POST, "/api/contacts").hasAuthority("SCOPE_write:contacts")
                    .requestMatchers(HttpMethod.PUT, "/api/contacts/*").hasAuthority("SCOPE_write:contacts")
                    .requestMatchers(HttpMethod.DELETE, "/api/contacts/*").hasAuthority("SCOPE_delete:contacts")

                    )
                    .cors(withDefaults())
                    .oauth2ResourceServer(oauth2 -> oauth2.jwt(withDefaults())
                    )
                    .build();
    }
}
