package com.cdac.edac.controller;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import com.cdac.edac.model.*;
import com.cdac.edac.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class QuestionController {

    @Autowired
    QuestionService questionService;


    @PostMapping(value = "/questions")
    Question saveQuestion(@RequestBody Question question) {
        return questionService.saveQuestion(question);
    }

    @PutMapping(value = "/questions")
    QuestionModel updateQuestion(@RequestBody Question question) {
        return questionService.updateStudent(question);
    }

    @GetMapping(value = "/practice/{subjectId}")
    List<QuestionModel> getQuestions(@PathVariable("subjectId") Integer subjectId) {
        return questionService.getRandomQuestions(subjectId);
    }

    @GetMapping(value = "/test/{subjectId}")
    List<QuestionModel> getRandomQuestionsForTrue(@PathVariable("subjectId") Integer subjectId) {
        return questionService.getRandomQuestionsForTrue(subjectId);
    }
    /**
     * POST Method /practice/checkanswer -> Object: req body questionId,subject id  answer return : totalQuestion,
     * correct answer count,wrong answer count, subject
     */
    @PostMapping(value = "/practice/checkanswer")
    ResultInfo checkAnswerAndReturnResult(@RequestBody PracticeTestInputDto practiceTestInputDto) {
        return questionService.checkPracticeAnswerAndReturnResult(practiceTestInputDto);
    }
    /**
     * POST Method /test -> Object: req body student id,Map<Integer, Integer> question id,subject id  answer
     *    return : save and return completeobj,
     *
     */
    @PostMapping(value = "/test")
    List<Result> testResult(@RequestBody LiveTestInputDto liveTestInputDto) {
        return questionService.saveAnswerAndReturnResult(liveTestInputDto);
    }

}
