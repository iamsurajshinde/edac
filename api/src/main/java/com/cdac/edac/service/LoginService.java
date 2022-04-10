package com.cdac.edac.service;

import com.cdac.edac.model.LoginPayload;
import com.cdac.edac.model.MaterialModel;
import com.cdac.edac.model.StudentModel;

public interface LoginService {
    StudentModel login(LoginPayload payload);
}
