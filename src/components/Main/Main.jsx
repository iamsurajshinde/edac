import React from "react";
import {
  PERFORMANCE,
  PRACTICE_TEST,
  STUDY_MATERIAL,
  TEST,
  UPDATE_PROFILE,
} from "../../services/constants";
import Performance from "../Performance/Performance";
import PracticeTest from "../PracticeTest/PracticeTest";
import Profile from "../Profile/Profile";
import StudyMaterial from "../StudyMaterial/StudyMaterial";
import Test from "../Test/Test";
import "./Main.css";
export default function Main(props) {
  const profile = localStorage.getItem("edacuser") || {};

  const subjects = [
    {
      subjectId: 1,
      subjectName: "core java",
    },
    {
      subjectId: 2,
      subjectName: "DBT",
    },
    {
      subjectId: 3,
      subjectName: "Data Structure",
    },
    {
      subjectId: 4,
      subjectName: "Advanced Java",
    },
    {
      subjectId: 5,
      subjectName: "WPT",
    },
    {
      subjectId: 6,
      subjectName: ".NET",
    },
  ];

  return (
    <div className="main-container">
      {props.screen === UPDATE_PROFILE && <Profile profile={profile} />}
      {props.screen === TEST && <Test subjects={subjects} />}
      {props.screen === PRACTICE_TEST && <PracticeTest subjects={subjects} />}
      {props.screen === PERFORMANCE && <Performance subjects={subjects} />}
      {props.screen === STUDY_MATERIAL && <StudyMaterial subjects={subjects} />}
    </div>
  );
}
