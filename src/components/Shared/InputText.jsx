import React from "react";

export default function InputText(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.name}
        name={props.name}
        placeholder={props.label}
        className="form-control"
        value={props.value || ""}
        onChange={(e) => props.onChange(e)}
        disabled={props.disabled}
      />
    </>
  );
}
