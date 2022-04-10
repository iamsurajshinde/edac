package com.cdac.edac.model;

import com.cdac.edac.entity.Subject;
import lombok.Data;

@Data
public class ResultInfo {
    Integer totalQuestion;
    Integer correctAnswer;
    Integer wrongAnswer;
    Subject subject;
}
