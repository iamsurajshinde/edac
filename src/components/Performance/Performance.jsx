import React, { useEffect, useState } from "react";
import "./Performance.css";
export default function Performance(props) {
  const [selectedSubject, setSelectedSubject] = useState(props.subjects[0]);
  const { performance } = props;

  useEffect(() => {
    for (const p of performance) {
      for (const s of props.subjects) {
        if (p.subjectId === s.subjectId) {
          p["subjectName"] = s.subjectName;
        }
      }
      p["result"] = Math.floor((p.correctAnswer / p.totalQuestion) * 100);
    }
  }, [performance]);

  return (
    <div className="performance">
      <div className="performance-table">
        {props.performance?.length === 0 && (
          <h2>You have not given any test.</h2>
        )}
        {props.performance?.length !== 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Total Questions</th>
                <th>Correct Answer</th>
                <th>Wrong Answer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {props.performance.map((p) => {
                return (
                  <tr>
                    <td onClick={() => setSelectedSubject(p)}>
                      {p.subjectName}
                    </td>
                    <td>{p.totalQuestion}</td>
                    <td>{p.correctAnswer}</td>
                    <td>{p.wrongAnswer}</td>
                    <td>{p.result}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="performance-report"></div>
    </div>
  );
}
