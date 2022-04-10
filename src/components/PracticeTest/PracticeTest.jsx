import React, { useState } from "react";
import Question from "../Question/Question";
import Questions from "./Question.json";
import "./PracticeTest.css";
import Subject from "../Subject/Subject";
export default function PracticeTest(props) {
  const [selectedSubject, setSelectedSubject] = useState();
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  const answers = {};
  const setAns = (data) => {
    answers[data.questionId] = data;
    console.log(answers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTestSubmitted()
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
          {Questions.map((q, i) => {
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
      {isTestSubmitted && <Performance />}
    </div>
  );
}
