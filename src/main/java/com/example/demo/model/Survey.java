package com.example.demo.model;


import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "Surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false, length=50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length=50)
    private String lastName;

    @Column(name = "street_address", nullable = false, length=100)
    private String streetAddress;

    @Column(name = "city", nullable = false, length=50)
    private String city;

    @Column(name = "state", nullable = false, length=50)
    private String state;

    @Column(name = "zip", nullable = false)
    private String zip;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "email", nullable = false, length=50)
    private String email;

    @Column(name = "survey_date", nullable = false)
    private LocalDate surveyDate;

    @Column(name = "most_liked")
    private String likedMost; // Stores selected options as a comma-separated string

    @Column(name = "interest_source")
    private String interestSource;

    @Column(name = "recommendation_list")
    private String recommendation_list;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getSurveyDate() {
        return surveyDate;
    }

    public void setSurveyDate(LocalDate surveyDate) {
        this.surveyDate = surveyDate;
    }

    public String getLikedMost() {
        return likedMost;
    }

    public void setLikedMost(String likedMost) {
        this.likedMost = likedMost;
    }

    public String getInterestSource() {
        return interestSource;
    }

    public void setInterestSource(String interestSource) {
        this.interestSource = interestSource;
    }

    public String getrecommendation_list() {
        return recommendation_list;
    }

    public void setrecommendation_list(String recommendation_list) {
        this.recommendation_list = recommendation_list;
    }



    // Default no-argument constructor
    public Survey() {
    }

    public Survey(String firstName, String lastName, String streetAddress, String city, String state, String zip,
                  String phone, String email, LocalDate surveyDate, String likedMost, String interestSource,
                  String recommendation_list) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.surveyDate = surveyDate;
        this.likedMost = likedMost;
        this.interestSource = interestSource;
        this.recommendation_list = recommendation_list;
    }

    // Getters and setters (not shown here for brevity)

    // toString method for logging and debugging
    @Override
    public String toString() {
        return "Survey{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", surveyDate=" + surveyDate +
                ", likedMost='" + likedMost + '\'' +
                ", interestSource='" + interestSource + '\'' +
                ", recommendation_list='" + recommendation_list + '\'' +
                '}';
    }



}