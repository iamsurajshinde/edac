package com.cdac.edac.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="subjects")
@Setter
@Getter
public class Subject {

    @Id
    Integer subjectId;
    String subjectName;
    @OneToMany(targetEntity=Material.class, mappedBy = "subject")
    List<Material> materials;

    LocalDateTime testStartTime;
    LocalDateTime testEndTime;



}
