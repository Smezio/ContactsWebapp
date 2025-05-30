package com.example.contactswebapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.contactswebapp.entity.Contact;
import com.example.contactswebapp.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@CrossOrigin(value = "*", maxAge = 3600)
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

    @PreAuthorize("hasAuthority('SCOPE_write:contacts')")
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

    @PreAuthorize("hasAuthority('SCOPE_write:contacts')")
    @PutMapping("/contacts/{id}")
    public Contact updateContact(@RequestBody Contact contact, @PathVariable("id") Long id) {
        try {
            Contact result = contactService.updateContact(contact, id);
            return result;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getCause());
        }
    }

    @PreAuthorize("hasAuthority('SCOPE_delete:contacts')")
    @DeleteMapping("/contacts/{id}")
    public Contact deleteContact(@PathVariable("id") Long id) {
        try {
            contactService.deleteContactById(id);
            return new Contact(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex.getCause());
        }
    }
}
