package com.cdac.edac.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "results")
@Setter
@Getter
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer resultId;

    @ManyToOne(targetEntity = Student.class)
    @JoinColumn(name = "studentId")
    Student student;

    @ManyToOne(targetEntity = Subject.class)
    @JoinColumn(name = "subjectId")
    Subject subject;

    String ans;
    Integer questionId;

    @CreatedDate
    @Column(name = "createdAt", nullable = false, updatable = false)
    Date createdAt;

    @LastModifiedDate
    @Column(name = "updatedAt")
    Date updatedAt;
}
