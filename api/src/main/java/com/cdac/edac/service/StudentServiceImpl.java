package com.cdac.edac.service;

import com.cdac.edac.entity.Student;
import com.cdac.edac.model.StudentModel;
import com.cdac.edac.repository.StudentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Override
    public List<StudentModel> getALlStudents() {


        List<StudentModel> students = new ArrayList<>();
        try {
            List<Student> entityList = studentRepository.findAll();
            for (Student student : entityList) {


                ObjectMapper modelMapper = new ObjectMapper();
                // .map(userDto, UserEntity.class);
                StudentModel studentModel = modelMapper.convertValue(student, StudentModel.class);


                students.add(studentModel);
            }

        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }

        return students;
    }


    @Override
    public StudentModel saveStudent(Student student) {

        StudentModel studentModel = null;
        try {
            student = studentRepository.save(student);
            ObjectMapper modelMapper = new ObjectMapper();
            studentModel = modelMapper.convertValue(student, StudentModel.class);
        } catch (Exception e) {
            System.out.println("Exception While Saving Student");
            e.printStackTrace();

        }
        return studentModel;
    }

    @Override
    public StudentModel updateStudent(Student student) {
        StudentModel studentModel = null;
        ObjectMapper modelMapper = new ObjectMapper();
        try {
           Student studentFromRepository = studentRepository.getById(student.getStudentId());

            studentFromRepository.setFirstName(student.getFirstName());
            studentFromRepository.setAddressLine1(student.getAddressLine1());
            studentFromRepository.setAddressLine2(student.getAddressLine2());
                    studentFromRepository.setEmail(student.getEmail());
            studentFromRepository.setGraduation(student.getGraduation());
                    studentFromRepository.setHsc(student.getHsc());
            studentFromRepository.setMobile(student.getMobile());
                    studentFromRepository.setLastName(student.getLastName());
            studentFromRepository.setPassword(student.getPassword());
                    studentFromRepository.setSsc(student.getSsc());
            studentFromRepository.setStudentId(student.getStudentId());

            student=studentRepository.save(studentFromRepository);
            studentModel=modelMapper.convertValue(student,StudentModel.class);

        } catch (Exception e) {
            System.out.println("Exception While Updating Student");
            e.printStackTrace();

        }
        return studentModel;
    }

    @Override
    public StudentModel deleteStudent(int id) {
        return null;
    }

}
