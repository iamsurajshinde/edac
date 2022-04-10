package com.cdac.edac.controller;

import com.cdac.edac.entity.Student;
import com.cdac.edac.model.StudentModel;
import com.cdac.edac.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping(value = "/students")
    List<StudentModel> getAllStudents() {
        List<StudentModel> studentsList = studentService.getALlStudents();

        return studentsList;
    }

    @PostMapping (value = "/students")
    StudentModel saveStudent(@RequestBody Student student) {

        StudentModel studentModel = studentService.saveStudent(student);

        return studentModel;
    }
    @PutMapping (value = "/students")
    StudentModel updateStudent(@RequestBody Student student) {

        StudentModel studentModel = studentService.updateStudent(student);

        return studentModel;
    }


}
