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
} from "./api/api";
import "./App.scss";

function App() {
  const [lecture, setLecture] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(0);
  const [assignment, setAssignment] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(0);
  const [problem, setProblem] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(0);
  const [testcase, setTestcase] = useState([]);
  const [code, setCode] = useState("user code");
  const [selectedCode, setSelectedCode] = useState(0);
  const [rightSection, setRightSection] = useState(1);
  const [excuteResult, setExecuteResult] = useState("");

  useEffect(() => {
    getLecture()
      .then((res) => {
        setLecture(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (lecture !== undefined && lecture[selectedLecture] !== undefined) {
      getAssignment(lecture[selectedLecture].lecture_id)
        .then((res) => {
          setAssignment(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lecture, selectedLecture]);

  useEffect(() => {
    if (
      assignment !== undefined &&
      assignment[selectedAssignment] !== undefined
    ) {
      getProblems(
        lecture[selectedLecture].lecture_id,
        assignment[selectedAssignment].assignment_id
      )
        .then((res) => {
          setProblem(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [assignment, selectedAssignment]);

  useEffect(() => {
    getProblemDetail(0, selectedProblem)
      .then((res) => {
        console.log(res.data);
        setTestcase(res.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [problem, selectedProblem]);

  return (
    <div className="root">
      <div className="inner">
        <Header
          lecture={lecture}
          assignment={assignment}
          selectedLecture={selectedLecture}
          selectedAssignment={selectedAssignment}
          setSelectedLecture={setSelectedLecture}
          setSelectedAssignment={setSelectedAssignment}
        />
        <div className="main">
          <Left
            problem={problem}
            selectedProblem={selectedProblem}
            setSelectedProblem={setSelectedProblem}
            testcase={testcase}
          />
          <Center
            code={code}
            setCode={setCode}
            setRightSection={setRightSection}
            setExecuteResult={setExecuteResult}
          />
          <Right rightSection={rightSection} excuteResult={excuteResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
