package com.cdac.edac.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import javax.persistence.Column;
import javax.persistence.UniqueConstraint;

@Getter
@Setter
public class StudentModel {

    Integer studentId;
    String firstName;


    String lastName;
    @Column(unique = true)
    String email;


    String password;

    String mobile;
    String addressLine1;
    String addressLine2;


    String ssc;


    String hsc;
    String graduation;
    String postGraduation;
    HttpStatus httpStatus;


}
