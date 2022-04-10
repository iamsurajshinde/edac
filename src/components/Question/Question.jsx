import React, { useEffect, useState } from "react";
import "./Question.css";
export default function Question(props) {
  const [column, setColumn] = useState(3);

  const handleClick = (ans) => {
    let data = {
      questionId: props.data.questionId,
      ans,
    };
    props.onSetAns(data);
  };

  useEffect(() => {
    let max = props.data.optionA.length;
    let column = 3;
    if (max < props.data.optionB.length) max = props.data.optionB.length;
    if (max < props.data.optionC.length) max = props.data.optionC.length;
    if (max < props.data.optionD.length) max = props.data.optionD.length;
    if (max > 34) column = 6;
    if (max > 68) column = 12;
    setColumn(column);
  }, [props.data]);

  return (
    <>
      <div className="question">
        {props.index + 1 + ") " + props.data.question}
      </div>
      <div className="row">
        <div className={"question-group col-" + column}>
          <input
            required
            type="radio"
            className="form-check-input"
            id={"optionA-" + props.data.questionId}
            name={"question-" + props.data.questionId}
            onClick={() => handleClick("A")}
          />
          <label
            className="form-check-label"
            htmlFor={"optionA-" + props.data.questionId}
          >
            {props.data.optionA}
          </label>
        </div>
        <div className={"question-group col-" + column}>
          <input
            required
            type="radio"
            className="form-check-input"
            id={"optionB-" + props.data.questionId}
            name={"question-" + props.data.questionId}
            onClick={() => handleClick("B")}
          />
          <label
            className="form-check-label"
            htmlFor={"optionB-" + props.data.questionId}
          >
            {props.data.optionB}
          </label>
        </div>
        <div className={"question-group col-" + column}>
          <input
            required
            type="radio"
            className="form-check-input"
            id={"optionC-" + props.data.questionId}
            name={"question-" + props.data.questionId}
            onClick={() => handleClick("C")}
          />
          <label
            className="form-check-label"
            htmlFor={"optionC-" + props.data.questionId}
          >
            {props.data.optionC}
          </label>
        </div>
        <div className={"question-group col-" + column}>
          <input
            required
            type="radio"
            className="form-check-input"
            id={"optionD-" + props.data.questionId}
            name={"question-" + props.data.questionId}
            onClick={() => handleClick("D")}
          />
          <label
            className="form-check-label"
            htmlFor={"optionD-" + props.data.questionId}
          >
            {props.data.optionD}
          </label>
        </div>
      </div>
    </>
  );
}
