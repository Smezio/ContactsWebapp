package com.example.contactswebapp.service;

import com.example.contactswebapp.entity.Contact;
import com.example.contactswebapp.repository.ContactRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        ArrayList<Contact> result = (ArrayList<Contact>) contactRepository.findAll();
        return result;
    };

    public Contact saveContact(Contact contact) {
        Contact result = contactRepository.save(contact);
        return result;
    };
}
