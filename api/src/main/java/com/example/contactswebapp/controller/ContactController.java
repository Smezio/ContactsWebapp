package com.example.contactswebapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.contactswebapp.model.Contact;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ContactController {
    
    @GetMapping("/contacts")
    public List<Contact> getAllContacts() {
        try {
            List<Contact> result = new ArrayList<>();
            return result;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getCause());
        }
    }
}
