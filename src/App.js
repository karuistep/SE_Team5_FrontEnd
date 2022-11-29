import Header from "./components/Header";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import { useState, useEffect } from "react";
import {
  getLecture,
  getAssignment,
  getProblems,
  getProblemDetail,
} from "./api/api";
import "./App.scss";

function App() {
  const [lecture, setLecture] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(0);
  const [assignment, setAssignment] = useState([]);
  const [selectedAssignmentID, setSelectedAssignmentID] = useState(0);
  const [selectedAssignmentIndex, setSelectedAssignmentIndex] = useState(0);
  const [problem, setProblem] = useState([]);
  const [selectedProblemID, setSelectedProblemID] = useState(0);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [testcase, setTestcase] = useState([]);
  const [code, setCode] = useState("default_code");
  const [userCode, setUserCode] = useState([]); // 사용자의 코드 슬롯 1,2,3을 저장하는 배열
  const [selectedCode, setSelectedCode] = useState(0); // 사용자가 몇 번째(0,1,2) 코드 슬롯을 사용중인지 저장하는 변수
  const [isSubmitted1, setIsSubmitted1] = useState(false); // 사용자의 제출코드 존재여부(1, 2, 3번째 제출)를 판별하는 변수들
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [isSubmitted3, setIsSubmitted3] = useState(false);
  const [codeIsSaved, setCodeIsSaved] = useState(0); // 코드 저장 여부를 저장하는 변수
  const [rightSection, setRightSection] = useState(1);
  const [excuteResult, setExecuteResult] = useState(true);
  const [excuteMessage, setExecuteMessage] = useState("");
  const [excuteErrorLine, setExecuteErrorLine] = useState(1);
  const [gradeResult, setGradeResult] = useState({});
  const [submitResult, setSubmitResult] = useState({});
  const [codeDiff, setCodeDiff] = useState(0);
  const [submittedWait, setSubmittedWait] = useState(0);

  // 처음 로드할 때 한 번만 강의 목록을 가져온다
  useEffect(() => {
    getLecture()
      .then((res) => {
        setLecture(res.data);
        setSelectedLecture(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 선택된 강의 ID가 변경되었을 때 해당 강의 아래에 있는 과제 목록을 가져온다
  useEffect(() => {
    if (lecture !== undefined && lecture[selectedLecture] !== undefined) {
      getAssignment(lecture[selectedLecture].lecture_id)
        .then((res) => {
          setAssignment(res.data);
          setSelectedAssignmentID(res.data[0].assignment_id);
          setSelectedAssignmentIndex(0);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lecture, selectedLecture]);

  // 선택된 과제 인덱스가 변경되었을 때 선택된 과제 ID를 업데이트하고 해당 과제 아래에 있는 문제 목록을 가져온다
  useEffect(() => {
    if (
      assignment !== undefined &&
      assignment[selectedAssignmentIndex] !== undefined
    ) {
      setSelectedAssignmentID(
        assignment[selectedAssignmentIndex].assignment_id
      );
      getProblems(
        lecture[selectedLecture].lecture_id,
        assignment[selectedAssignmentIndex].assignment_id
      )
        .then((res) => {
          setProblem(res.data);
          setSelectedProblemID(res.data[0].problem_id);
          setSelectedProblemIndex(0);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [assignment, selectedAssignmentIndex]);

  // 문제가 변경되었을 때 선택된 문제 ID를 업데이트하고 테스트케이스, 사용자 입력 코드를 업데이트한다.
  useEffect(() => {
    if (problem !== undefined && problem[selectedProblemIndex] !== undefined) {
      setSelectedProblemID(problem[selectedProblemIndex].problem_id);
      setSelectedCode(0);
      getProblemDetail(0, selectedProblemID)
        .then((res) => {
          setTestcase(res.data[1]);
          setUserCode(res.data[2]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [problem, selectedProblemIndex]);

  // 선택 코드슬롯이 변경되었을 때 현재 코드 변경 및 제출코드 블락 설정
  useEffect(() => {
    let flag = 0;
    userCode.map((code, index) => {
      if (code.code_idx === selectedCode + 1) {
        flag = 1;
        setCode(code.user_code);
        return;
      }
    });
    if (flag == 0) {
      setCode("");
    }
    userCode.map((code, index) => {
      if (code.code_idx === 4) {
        setIsSubmitted1(true);
      }
      if (code.code_idx === 5) {
        setIsSubmitted2(true);
      }
      if (code.code_idx === 6) {
        setIsSubmitted3(true);
      }
    });
  }, [selectedCode, userCode]);

  return (
    <div className="root">
      <div className="inner">
        <Header
          lecture={lecture}
          assignment={assignment}
          selectedLecture={selectedLecture}
          selectedAssignmentIndex={selectedAssignmentIndex}
          submittedWait={submittedWait}
          setSelectedLecture={setSelectedLecture}
          setSelectedAssignmentIndex={setSelectedAssignmentIndex}
        />
        <div className="main">
          <Left
            code={code}
            problem={problem}
            testcase={testcase}
            selectedCode={selectedCode}
            selectedProblemIndex={selectedProblemIndex}
            submittedWait={submittedWait}
            setSelectedProblemIndex={setSelectedProblemIndex}
            setSelectedProblemID={setSelectedProblemID}
          />
          <Center
            selectedProblemID={selectedProblemID}
            code={code}
            userCode={userCode}
            selectedCode={selectedCode}
            isSubmitted1={isSubmitted1}
            isSubmitted2={isSubmitted2}
            isSubmitted3={isSubmitted3}
            excuteResult={excuteResult}
            excuteErrorLine={excuteErrorLine}
            submittedWait={submittedWait}
            setCode={setCode}
            setUserCode={setUserCode}
            setSelectedCode={setSelectedCode}
            setCodeIsSaved={setCodeIsSaved}
            setRightSection={setRightSection}
            setExecuteResult={setExecuteResult}
            setExecuteMessage={setExecuteMessage}
            setExecuteErrorLine={setExecuteErrorLine}
            setGradeResult={setGradeResult}
            setSubmitResult={setSubmitResult}
            setSubmittedWait={setSubmittedWait}
          />
          <Right
            rightSection={rightSection}
            excuteMessage={excuteMessage}
            gradeResult={gradeResult}
            submitResult={submitResult}
            submittedWait={submittedWait}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
