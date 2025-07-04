package com.example.contactswebapp.entity;

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
    private Long id;

    // First Name
    @Column(name = "firstName", nullable = false)
    private String firstName;

    // First Name
    @Column(name = "lastName", nullable = false)
    private String lastName;

    // Email
    @Column(name = "email", nullable = false)
    private String email;
    
    // Telephone
    @Column(name = "telephone", nullable = false)
    private String telephone;

    public Contact () {
        this.id = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.telephone = null;
    }

    public Contact (Long id) {
        this.id = id;
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
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }
}
