import React, { useState } from "react";
import Subject from "../Subject/Subject";
import Items from "./Items";
import "./StudyMaterial.css";
export default function StudyMaterial(props) {
  const [selectedSubject, setSelectedSubject] = useState();
  const links = [
    {
      subjectId: selectedSubject,
      name: "Sample Pdf",
      type: "PDF",
      url: "http://www.africau.edu/images/default/sample.pdf",
    },
    {
      subjectId: selectedSubject,
      name: "Sample DOC",
      type: "DOC",
      url: "http://www.africau.edu/images/default/sample.pdf",
    },
  ];

  return (
    <div className="test-container">
      {!selectedSubject && (
        <Subject
          subjects={props.subjects}
          onSelect={(subject) => setSelectedSubject(subject)}
        />
      )}
      {selectedSubject && (
        <>
          <button
            className="material-back"
            onClick={() => setSelectedSubject()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </button>
          {links.map((ele) => {
            return <Items {...ele} />;
          })}
        </>
      )}
    </div>
  );
}
