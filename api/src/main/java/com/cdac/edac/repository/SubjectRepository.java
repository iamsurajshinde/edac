package com.cdac.edac.repository;

import com.cdac.edac.entity.Result;
import com.cdac.edac.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
}
