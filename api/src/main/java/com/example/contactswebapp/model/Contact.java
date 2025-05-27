package com.example.contactswebapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contacts")
public class Contact {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;
    
    @Column(name = "telephone")
    private String telephone;

    public Contact () {
        this.id = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.telephone = null;
    }

    public Contact (String firstName, String lastName, String email, String telephone) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
    }
    
    String getFirstName() { return firstName; }
    void setFirstName(String firstName) { this.firstName = firstName; }

    String getLastName() { return lastName; }
    void setLastName(String lastName) { this.lastName = lastName; }

    String getEmail() { return email; }
    void setEmail(String email) { this.email = email; }

    String getTelephone() { return telephone; }
    void setTelephone(String telephone) { this.telephone = firstName; }
}
