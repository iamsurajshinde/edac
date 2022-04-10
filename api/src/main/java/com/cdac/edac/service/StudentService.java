package com.cdac.edac.service;

import com.cdac.edac.entity.Student;
import com.cdac.edac.model.StudentModel;

import java.util.List;

public interface StudentService {

   public List<StudentModel> getALlStudents();
   public StudentModel saveStudent(Student student);
   public StudentModel updateStudent(Student student);
   public StudentModel deleteStudent(int id);

}
