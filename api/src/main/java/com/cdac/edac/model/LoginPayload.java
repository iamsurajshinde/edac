package com.cdac.edac.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginPayload {

    String email;
    String password;
}
