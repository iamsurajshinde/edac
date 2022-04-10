package com.cdac.edac.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ResultModel {
    Integer resultId;
    Integer questionId;
    Integer studentId;
    String ans;
    Boolean isTest;
    Date createdDate;
    Date updateDate;
}
