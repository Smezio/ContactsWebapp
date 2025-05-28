package com.example.contactswebapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.contactswebapp.entity.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {
    
}
