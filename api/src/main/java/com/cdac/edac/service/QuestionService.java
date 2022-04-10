package com.cdac.edac.service;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import com.cdac.edac.model.*;

import java.util.List;

public interface QuestionService {
    List<QuestionModel> getRandomQuestions(Integer subjectId);

    List<QuestionModel> getRandomQuestionsForTrue(Integer subjectId);

    Question saveQuestion(Question question);

    QuestionModel updateStudent(Question question);

    ResultInfo checkPracticeAnswerAndReturnResult(PracticeTestInputDto practiceTestInputDto);

    List<Result> saveAnswerAndReturnResult(LiveTestInputDto liveTestInputDto);
}
