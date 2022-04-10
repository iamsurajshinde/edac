package com.cdac.edac.model;

import com.cdac.edac.entity.Subject;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionModel {

    Integer questionId;
    String question;
    String  optionA;
    String  optionB;
    String  optionC;
    String  optionD;
   // Subject subject=new Subject();
    String  ans;

}
