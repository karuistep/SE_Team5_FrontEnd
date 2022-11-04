import "./App.css";
import Header from "./components/Header";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useState, useEffect } from "react";
import {
  getLecture,
  getAssignment,
  getProblems,
  getProblem,
  getProblemDetail,
  saveCodeInDB,
  saveCodeInPC,
} from "./api/api";

function App() {
  const [lecture, setLecture] = useState();
  const [assignment, setAssignment] = useState();
  const [problem, setProblem] = useState();

  useEffect(() => {
    getLecture()
      .then((res) => {
        setLecture(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (lecture != undefined) {
      getAssignment(lecture.lecture_id)
        .then((res) => {
          setAssignment(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lecture]);

  useEffect(() => {
    if (assignment != undefined) {
      getProblems(lecture.lecture_id, assignment.assignment_id)
        .then((res) => {
          setProblem(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [assignment]);

  useEffect(() => {
    console.log("problem: ", problem);
    if (problem != undefined) {
      getProblemDetail(0, problem.problem_id)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [problem]);

  return (
    <div className="inner" style={{ width: "1440px", margin: "auto" }}>
      <Header lecture={lecture} assignment={assignment} />
      <div
        className="main"
        style={{
          height: "650px",
          border: "1px solid #000000",
          boxSizing: "border-box",
          backgroundColor: "green",
          display: "flex",
        }}
      >
        <Left problem={problem} />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;
