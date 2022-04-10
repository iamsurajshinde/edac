package com.cdac.edac.service;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import com.cdac.edac.model.QuestionModel;
import com.cdac.edac.model.ResultModel;
import com.cdac.edac.repository.ResultRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    ResultRepository resultRepository;

    @Override
    public List<ResultModel> getResults(Integer studentId) {
        List<ResultModel> results = new ArrayList<>();
        try{
        List<Result> resultEntities = resultRepository.findResultsforStudent(studentId);
     
        ResultModel resultModel;
        for (Result result : resultEntities) {
            resultModel = new ResultModel();
            resultModel.setAns(result.getAns());
            resultModel.setCreatedDate(result.getCreatedAt());
            resultModel.setUpdateDate(result.getUpdatedAt());
            resultModel.setQuestionId(result.getResultId());
            resultModel.setStudentId(result.getStudent().getStudentId());
            results.add(resultModel);
        }}
        catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return results;
    }

    @Override
    public ResultModel saveResult(Result result) {
        ResultModel resultModel = null;
        try {
            result = resultRepository.save(result);
            resultModel = new ResultModel();
            resultModel.setResultId(result.getResultId());
            resultModel.setStudentId(result.getStudent().getStudentId());
//            resultModel.setQuestionId(result.getQuestionId());
            resultModel.setAns(result.getAns());
//            resultModel.setIsTest(result.getIsTest());
            resultModel.setCreatedDate(result.getCreatedAt());
            resultModel.setUpdateDate(result.getUpdatedAt());
            
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return resultModel;
    }

    @Override
    public ResultModel updateResult(Result result) {
        ResultModel resultModel = new ResultModel();
        try{
        Result resultFromRepository = resultRepository.getById(result.getResultId());

        resultFromRepository.setResultId(result.getResultId());
        resultFromRepository.setStudent(result.getStudent());
        resultFromRepository.setAns(result.getAns());
        resultFromRepository.setCreatedAt(result.getCreatedAt());
//        resultFromRepository.setIsTest(result.getIsTest());
        result = resultRepository.save(resultFromRepository);

        resultModel.setResultId(result.getResultId());
        resultModel.setCreatedDate(result.getCreatedAt());
//        resultModel.setIsTest(result.getIsTest());
//        resultModel.setQuestionId(result.getQuestionId());
        resultModel.setStudentId(result.getStudent().getStudentId());
        resultModel.setAns(result.getAns());
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return resultModel;
    }
}
