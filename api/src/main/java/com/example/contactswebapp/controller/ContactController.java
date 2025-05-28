package com.example.contactswebapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.contactswebapp.entity.Contact;
import com.example.contactswebapp.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactService contactService;
    
    @GetMapping("/contacts")
    public List<Contact> getAllContacts() {
        try {
            List<Contact> result = contactService.getAllContacts();            
            return result;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getCause());
        }
    }

    @PostMapping("/contacts")
    public Contact saveContact(@RequestBody Contact contact) {
        try {
            Contact result = contactService.saveContact(contact);
            return result;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getCause());
        }
    }
}
