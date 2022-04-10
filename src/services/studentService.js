import axios from "axios";
import API from "./API";

async function getStudyMaterial(subjectId) {
  return await axios.get(API.BASE_URL + API.MATERIALS + "/" + subjectId);
}

async function getPerformance(studentId) {
  return await axios.get(API.BASE_URL + API.RESULTS + "/" + studentId);
}

async function getPracticeQuestions(subjectId) {
  return await axios.get(API.BASE_URL + API.PRACTICE + "/" + subjectId);
}

async function checkPracticeQuestions(answers) {
  return await axios.post(API.BASE_URL + API.PRACTICE_CHECK, { ...answers });
}

async function getTestQuestions(subjectId) {
  return await axios.get(API.BASE_URL + API.TEST + "/" + subjectId);
}

async function submitTest(test) {
  return await axios.post(API.BASE_URL + API.TEST, { ...test });
}

async function updateProfile(profile) {
  return await axios.post(API.BASE_URL + API.PROFILE, { ...profile });
}

export {
  getStudyMaterial,
  getPerformance,
  getPracticeQuestions,
  checkPracticeQuestions,
  getTestQuestions,
  updateProfile,
  submitTest,
};
