import React from "react";
import {
  PERFORMANCE,
  PRACTICE_TEST,
  STUDY_MATERIAL,
  TEST,
} from "../../services/constants";
import "./Sidebar.css";

export default function Sidebar(props) {
  const handleClick = (e) => {
    props.onSetScreen(e.target.dataset.view);
  };
  return (
    <ul className="sidebar">
      <li onClick={handleClick} data-view={TEST}>
        Give Test
      </li>
      <li onClick={handleClick} data-view={PRACTICE_TEST}>
        Give Practice Test
      </li>
      <li onClick={handleClick} data-view={PERFORMANCE}>
        Performance
      </li>
      <li onClick={handleClick} data-view={STUDY_MATERIAL}>
        Study Material
      </li>
    </ul>
  );
}
