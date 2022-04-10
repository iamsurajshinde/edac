package com.cdac.edac.service;

import com.cdac.edac.entity.Result;
import com.cdac.edac.model.ResultModel;


import java.util.List;

public interface ResultService {
    List<ResultModel> getResults(Integer studentId);

    ResultModel saveResult(Result result);

    ResultModel updateResult(Result result);
}
