package com.cdac.edac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="students")
@Setter
@Getter
public class Student implements Serializable {

    @Id
    @Column(name = "studentId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer studentId;
    String  firstName;
      String      lastName;
        String    email;
         String   password;
            String mobile;
            String addressLine1;
            String addressLine2;
    String ssc;
    String hsc;
    String graduation;
    String postGraduation;
/*

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }*/
}
