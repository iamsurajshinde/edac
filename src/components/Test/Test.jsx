import React, { useState } from "react";
import "./Test.css";
import Questions from "./Question.json";
import Question from "../Question/Question";
import Subject from "../Subject/Subject";
export default function Test(props) {
  const [selectedSubject, setSelectedSubject] = useState();

  const answers = {};
  const setAns = (data) => {
    answers[data.questionId] = data;
    console.log(answers);
  };

  return (
    <div className="test-container">
      {!selectedSubject && (
        <Subject
          subjects={props.subjects}
          onSelect={(subject) => setSelectedSubject(subject)}
        />
      )}
      {selectedSubject &&
        Questions.map((q, i) => {
          return (
            <Question
              key={i}
              index={i}
              data={q}
              onSetAns={(data) => setAns(data)}
            />
          );
        })}
    </div>
  );
}
