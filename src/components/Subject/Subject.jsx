import React from "react";
import "./Subject.css";
export default function Subject(props) {
  return (
    <div className="container">
      <div className="row">
        {props.subjects.map((subject) => {
          return (
            <div className="col-md-4 col-sm-6" key={subject.subjectId}>
              <div
                className="subject-card"
                onClick={() => {
                  props.onSelect(subject.subjectId);
                }}
              >
                {subject.subjectName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
