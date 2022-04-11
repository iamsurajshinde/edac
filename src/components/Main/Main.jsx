import React, { useContext } from "react";
import {
  PERFORMANCE,
  PRACTICE_TEST,
  STUDY_MATERIAL,
  TEST,
  UPDATE_PROFILE,
} from "../../services/constants";
import { getPerformance } from "../../services/studentService";
import { CommonContext } from "../Home/Home";
import Performance from "../Performance/Performance";
import PracticeTest from "../PracticeTest/PracticeTest";
import Profile from "../Profile/Profile";
import StudyMaterial from "../StudyMaterial/StudyMaterial";
import Test from "../Test/Test";
import "./Main.css";
export default function Main(props) {
  const { user } = useContext(CommonContext);
  const [performance, setPerformance] = useState([]);
  // const subjects = [
  //   {
  //     subjectId: 1,
  //     subjectName: "core java",
  //   },
  //   {
  //     subjectId: 2,
  //     subjectName: "DBT",
  //   },
  //   {
  //     subjectId: 3,
  //     subjectName: "Data Structure",
  //   },
  //   {
  //     subjectId: 4,
  //     subjectName: "Advanced Java",
  //   },
  //   {
  //     subjectId: 5,
  //     subjectName: "WPT",
  //   },
  //   {
  //     subjectId: 6,
  //     subjectName: ".NET",
  //   },
  // ];

  useEffect(() => {
    getPerformance(user.studentId)
      .then(({ data }) => {
        setPerformance(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <div className="main-container">
      {props.screen === UPDATE_PROFILE && <Profile profile={user} />}
      {props.screen === TEST && <Test subjects={props.subjects} />}
      {props.screen === PRACTICE_TEST && (
        <PracticeTest subjects={props.subjects} />
      )}
      {props.screen === PERFORMANCE && (
        <Performance subjects={props.subjects} performance={performance} />
      )}
      {props.screen === STUDY_MATERIAL && (
        <StudyMaterial subjects={props.subjects} />
      )}
    </div>
  );
}
