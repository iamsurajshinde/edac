package com.cdac.edac.repository;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Integer> {
    @Query("SELECT q FROM Question q WHERE q.subject.subjectId = ?1")
    List<Question> findQuestionforSubject(Integer id);
}
