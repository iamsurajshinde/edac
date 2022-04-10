package com.cdac.edac.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "questions")
@Setter
@Getter
public class Question implements Serializable {

    @Id
    Integer questionId;
    String question;
    String optionA;
    String optionB;
    String optionC;
    String optionD;
    String ans;
    @ManyToOne(targetEntity = Subject.class)
    @JoinColumn(name = "subjectId")
    Subject subject;
    Boolean isTest;

}
