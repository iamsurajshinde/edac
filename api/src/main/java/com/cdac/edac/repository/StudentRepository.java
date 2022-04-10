package com.cdac.edac.repository;

import com.cdac.edac.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository  extends JpaRepository<Student,Integer> {

    @Query("SELECT s  FROM Student s WHERE s.email = ?1")
    Student findByEmail(String email);

}
