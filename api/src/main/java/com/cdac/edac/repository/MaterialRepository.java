package com.cdac.edac.repository;

import com.cdac.edac.entity.Material;
import com.cdac.edac.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MaterialRepository extends JpaRepository<Material,Integer> {

    @Query("SELECT m FROM Material m WHERE m.subject.subjectId = ?1")
    List<Material> findMaterialForSubject(Integer id);


}
