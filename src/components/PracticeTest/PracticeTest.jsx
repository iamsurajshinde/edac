import React, { useState } from "react";
import Question from "../Question/Question";
// import Questions from "./Question.json";
import "./PracticeTest.css";
import Subject from "../Subject/Subject";
import Performance from "../Performance/Performance";
import {
  checkPracticeQuestions,
  getPracticeQuestions,
} from "../../services/studentService";
import { toast } from "react-toastify";
export default function PracticeTest(props) {
  const [selectedSubject, setSelectedSubject] = useState();
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [performance, setPerformance] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getPracticeQuestions(selectedSubject)
      .then(({ data }) => {
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!!");
      });
  }, [selectedSubject]);

  const answers = {};
  const setAns = (data) => {
    answers[data.questionId] = data;
    console.log(answers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      subjectId: selectedSubject.subjectId,
      questionIds: answers,
    };
    checkPracticeQuestions(data)
      .then(({ data }) => {
        setIsTestSubmitted(true);
        setPerformance(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error. Try again!!");
      });
  };
  return (
    <div className="test-container">
      {!selectedSubject && (
        <Subject
          subjects={props.subjects}
          onSelect={(subject) => setSelectedSubject(subject)}
        />
      )}
      {selectedSubject && (
        <form onSubmit={handleSubmit}>
          {questions.map((q, i) => {
            return (
              <Question
                key={i}
                index={i}
                data={q}
                onSetAns={(data) => setAns(data)}
              />
            );
          })}
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value={"Submit Test"}
            />
          </div>
        </form>
      )}
      {isTestSubmitted && (
        <Performance subjects={props.subjects} performance={performance} />
      )}
    </div>
  );
}
