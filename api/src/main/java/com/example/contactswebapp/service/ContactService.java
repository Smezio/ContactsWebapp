package com.example.contactswebapp.service;

import com.example.contactswebapp.entity.Contact;
import com.example.contactswebapp.repository.ContactRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public Contact updateContact(Contact contact, Long id) {
        Optional<Contact> currentContact = contactRepository.findById(id);
        
        if(!currentContact.isEmpty()) {

            // Check First Name
            if(!currentContact.get().getFirstName().equalsIgnoreCase(contact.getFirstName()))
                currentContact.get().setFirstName(contact.getFirstName());

            // Check Last Name
            if(!currentContact.get().getLastName().equalsIgnoreCase(contact.getLastName()))
                currentContact.get().setLastName(contact.getLastName());

            // Check Email
            if(!currentContact.get().getEmail().equalsIgnoreCase(contact.getEmail()))
                currentContact.get().setEmail(contact.getEmail());

            // Check Telephone
            if(!currentContact.get().getTelephone().equalsIgnoreCase(contact.getTelephone()))
                currentContact.get().setTelephone(contact.getTelephone());
        }

        Contact result = contactRepository.save(currentContact.get());
        return result;
    }

    public void deleteContactById(Long id) {
        contactRepository.deleteById(id);
    }
}
