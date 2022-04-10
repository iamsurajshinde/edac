package com.cdac.edac.controller;

import com.cdac.edac.entity.Material;
import com.cdac.edac.model.LoginPayload;
import com.cdac.edac.model.MaterialModel;
import com.cdac.edac.model.StudentModel;
import com.cdac.edac.service.LoginService;
import com.cdac.edac.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping(value = "/login")
    StudentModel login(@RequestBody LoginPayload payload) {

        StudentModel studentModel = loginService.login(payload);

        return studentModel;
    }


}
