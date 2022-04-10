package com.cdac.edac.repository;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result,Integer> {
    @Query("SELECT r FROM Result r WHERE r.student.studentId = ?1")
    List<Result>  findResultsforStudent(Integer id);


}
