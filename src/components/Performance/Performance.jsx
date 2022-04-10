import React, { useState } from "react";
import "./Performance.css";
export default function Performance(props) {
  const [selectedSubject, setSelectedSubject] = useState(props.subjects[0]);
  return (
    <div className="performance">
      <div className="performance-table">
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
            {props.subjects.map((subject) => {
              <tr>
                <td onClick={() => setSelectedSubject(subject)}>
                  {subject.subjectName}
                </td>
                <td>50</td>
                <td>30</td>
                <td>20</td>
                <td>60%</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className="performance-report"></div>
    </div>
  );
}
