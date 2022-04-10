package com.cdac.edac.controller;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import com.cdac.edac.model.QuestionModel;
import com.cdac.edac.model.ResultModel;
import com.cdac.edac.service.QuestionService;
import com.cdac.edac.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping("/api")
public class ResultController {

    @Autowired
    ResultService resultService;

    @GetMapping(value = "/results/{studentId}")
    List<ResultModel> getQuestions(@PathVariable("studentId") Integer studentId) {
        List<ResultModel> results = resultService.getResults(studentId);

        return results;
    }
    @PostMapping(value = "/results")
    ResultModel saveQuestion(@RequestBody Result result) {

        ResultModel resultModel = resultService.saveResult(result);

        return resultModel;
    }
    @PutMapping(value = "/results")
    ResultModel updateQuestion(@RequestBody Result result) {

        ResultModel resultModel = resultService.updateResult(result);

        return resultModel;
    }


}
