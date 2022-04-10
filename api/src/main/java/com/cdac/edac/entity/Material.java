package com.cdac.edac.entity;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "materials")
@Data
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer materialId;
    String name;
    String url;
    @ManyToOne(targetEntity = Subject.class)
    @JoinColumn(name = "subjectId")
    Subject subject;
    String type;
}
