package com.cdac.edac.service;

import com.cdac.edac.entity.Student;
import com.cdac.edac.model.LoginPayload;
import com.cdac.edac.model.StudentModel;
import com.cdac.edac.repository.StudentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public StudentModel login(LoginPayload payload) {
        StudentModel studentModel = null;
        try {
            Student student = studentRepository.findByEmail(payload.getEmail());
            ObjectMapper modelMapper = new ObjectMapper();
            if (studentModel == null)
                studentModel.setHttpStatus(HttpStatus.UNAUTHORIZED);
            else if (!payload.getPassword().equalsIgnoreCase(student.getPassword())) {

                studentModel.setHttpStatus(HttpStatus.UNAUTHORIZED);
            } else {

                studentModel = modelMapper.convertValue(student, StudentModel.class);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        return studentModel;
    }
}
