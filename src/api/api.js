import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: false,
  timeout: 5000,
});

const getLecture = async () => {
  return await instance.post("/study/");
};

const getAssignment = async (lecture_id) => {
  return await instance.post("/study/lecture/", {
    lecture_id,
  });
};

const getProblems = async (lecture_id, assignment_id) => {
  return await instance.post("/study/assignment/", {
    lecture_id,
    assignment_id,
  });
};

const getProblem = async (lecture_id, assignment_id, problem_id) => {
  return await instance.post("/study/problem/", {
    lecture_id,
    assignment_id,
    problem_id,
  });
};

const getProblemDetail = async (user_id, problem_id) => {
  return await instance.get(`/study/${user_id}/${problem_id}`);
};

const getRecentProblem = async () => {
  return await instance.get(`/study/recent`);
};

const saveCodeInDB = async (problem, user, user_code) => {
  return await instance.post("/study/save/", {
    problem,
    user,
    user_code,
  });
};

const executeCode = async (user_code) => {
  return await instance.post(`/study/run`, {
    user_code,
  });
};

export {
  getLecture,
  getAssignment,
  getProblems,
  getProblem,
  getProblemDetail,
  getRecentProblem,
  saveCodeInDB,
  executeCode,
};
