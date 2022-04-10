package com.cdac.edac.model;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class PracticeTestInputDto {
    Integer subjectId;
    List<TestObject> questionIds;
}
