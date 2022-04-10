import React from "react";

export default function SelectInput(props) {
  const years = [];
  for (let i = 2000; i < 2023; i++) {
    years.push(i);
  }
  return (
    <>
      <label htmlFor={props.name}>
        {props.label}
        <small> year of passing</small>
      </label>
      <select
        id={props.name}
        name={props.name}
        className="form-control"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      >
        <option value={""}> - select year of passing - </option>
        {years.map((year) => {
          return <option>{year}</option>;
        })}
      </select>
    </>
  );
}
