package com.cdac.edac.model;

import com.cdac.edac.entity.Result;
import lombok.Data;

@Data
public class LiveTestResult {
    Result result;
    Integer totalQuestion;
    Integer correctAnswer;
    Integer wrongAnswer;
}
