package com.cdac.edac.service;

import com.cdac.edac.entity.Question;
import com.cdac.edac.entity.Result;
import com.cdac.edac.entity.Student;
import com.cdac.edac.entity.Subject;
import com.cdac.edac.model.*;
import com.cdac.edac.repository.QuestionRepository;
import com.cdac.edac.repository.ResultRepository;
import com.cdac.edac.repository.StudentRepository;
import com.cdac.edac.repository.SubjectRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    SubjectRepository subjectRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    ResultRepository resultRepository;

    @Override
    public List<QuestionModel> getRandomQuestions(Integer subjectId) {
        List<Question> questionsEntities = questionRepository.findQuestionforSubject(subjectId);
        List<QuestionModel> questions = getQuestionModel(questionsEntities);
        Collections.shuffle(questions);
        return questions.stream().limit(20).collect(Collectors.toList());
    }

    @Override
    public List<QuestionModel> getRandomQuestionsForTrue(Integer subjectId) {
        List<Question> questionsEntities = questionRepository.findQuestionforSubject(subjectId).
                stream().filter(p -> p.getIsTest() == true).collect(Collectors.toList());
        List<QuestionModel> questions = getQuestionModel(questionsEntities);
        Collections.shuffle(questions);
        return questions.stream().limit(20).collect(Collectors.toList());
    }

    @Override
    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public QuestionModel updateStudent(Question question) {
        QuestionModel questionModel = null;
        try {

            Question questionFromRepository = questionRepository.getById(question.getQuestionId());

            questionFromRepository.setAns(question.getAns());
            questionFromRepository.setOptionA(question.getOptionA());
            questionFromRepository.setOptionB(question.getOptionB());
            questionFromRepository.setOptionC(question.getOptionC());
            questionFromRepository.setOptionD(question.getOptionD());
            questionFromRepository.setQuestion(question.getQuestion());


            question = questionRepository.save(questionFromRepository);
            ObjectMapper modelMapper = new ObjectMapper();
            questionModel = modelMapper.convertValue(question, QuestionModel.class);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return questionModel;

    }

    @Override
    public ResultInfo checkPracticeAnswerAndReturnResult(PracticeTestInputDto practiceTestInputDto) {
        ResultInfo resultInfo = new ResultInfo();
        Optional<Subject> subject = subjectRepository.findById(practiceTestInputDto.getSubjectId());
        if (!subject.isEmpty()) {
            resultInfo.setSubject(subject.get());
        }
        List<Integer> idList = new ArrayList<>();
        Map<Integer, TestObject> mapDtoQuestionIds = new HashMap<>();

        for (TestObject question : practiceTestInputDto.getQuestionIds()) {
            mapDtoQuestionIds.put(question.getQuestionId(), question);
        }
        List<Question> repoQuestions = questionRepository.findAllById(idList);
        int correct = 0;
        int incorrect = 0;
        for (Question repoQuestion : repoQuestions) {

            if (repoQuestion.getAns() == mapDtoQuestionIds.get(repoQuestion.getQuestionId()).getAnswer()) {
                correct++;
            } else {
                incorrect++;
            }
        }
        resultInfo.setCorrectAnswer(correct);
        resultInfo.setWrongAnswer(incorrect);
        resultInfo.setTotalQuestion(correct + incorrect);
        return resultInfo;
    }

    @Override
    public List<Result> saveAnswerAndReturnResult(LiveTestInputDto liveTestInputDto) {
        List<Result> resultList = new ArrayList<>();
        Subject subject = subjectRepository.getById(liveTestInputDto.getSubjectId());
        Student student = studentRepository.getById(liveTestInputDto.getStudentId());
        for (TestObject question : liveTestInputDto.getQuestions()) {
            Result result = new Result();
            result.setQuestionId(question.getQuestionId());
            result.setAns(question.getAnswer());
            result.setStudent(student);
            result.setSubject(subject);
            resultList.add(result);
        }
        return resultRepository.saveAll(resultList);
    }

    private List<QuestionModel> getQuestionModel(List<Question> questionsEntities) {
        List<QuestionModel> questions = new ArrayList<>();
        QuestionModel questionModel;
        for (Question question : questionsEntities) {
            questionModel = new QuestionModel();
            questionModel.setQuestionId(question.getQuestionId());
            questionModel.setOptionA(question.getOptionA());
            questionModel.setOptionB(question.getOptionB());
            questionModel.setOptionC(question.getOptionC());
            questionModel.setOptionD(question.getOptionD());
            questionModel.setQuestion(question.getQuestion());
            questionModel.setAns(question.getAns());
            questions.add(questionModel);
        }

        return questions;
    }
}
