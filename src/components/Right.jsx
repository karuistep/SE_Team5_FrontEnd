import { useState, useEffect } from "react";
import "./Right.scss";

const Right = (props) => {
  // 채점 결과 점수와 테스트케이스 1,2,3(오픈), 4,5,6(히든)의 결과와 입/출력, 사용자 출력값을 저장하는 변수
  const [gradeScore, setGradeScore] = useState(0);
  const [testcase1Result, setTestcase1Result] = useState("");
  const [testcase1Input, setTestcase1Input] = useState("");
  const [testcase1CorrectOutput, setTestcase1CorrectOutput] = useState("");
  const [testcase1UserOutput, setTestcase1UserOutput] = useState("");

  const [testcase2Result, setTestcase2Result] = useState("");
  const [testcase2Input, setTestcase2Input] = useState("");
  const [testcase2CorrectOutput, setTestcase2CorrectOutput] = useState("");
  const [testcase2UserOutput, setTestcase2UserOutput] = useState("");

  const [testcase3Result, setTestcase3Result] = useState("");
  const [testcase3Input, setTestcase3Input] = useState("");
  const [testcase3CorrectOutput, setTestcase3CorrectOutput] = useState("");
  const [testcase3UserOutput, setTestcase3UserOutput] = useState("");

  const [testcase4Result, setTestcase4Result] = useState("");
  const [testcase5Result, setTestcase5Result] = useState("");
  const [testcase6Result, setTestcase6Result] = useState("");

  // 첫번째 테스트 케이스의 조건부 렌더링 함수
  const gradeResult1 = () => {
    if (testcase1Result == "실패") {
      return (
        <div>
          Input : {testcase1Input}
          <br />
          Output : {testcase1CorrectOutput}
          <br />
          Your Output : {testcase1UserOutput}
        </div>
      );
    }
  };

  // 두번째 테스트 케이스의 조건부 렌더링 함수
  const gradeResult2 = () => {
    if (testcase2Result == "실패") {
      return (
        <div>
          Input : {testcase2Input}
          <br />
          Output : {testcase2CorrectOutput}
          <br />
          Your Output : {testcase2UserOutput}
        </div>
      );
    }
  };

  // 세번째 테스트 케이스의 조건부 렌더링 함수
  const gradeResult3 = () => {
    if (testcase3Result == "실패") {
      return (
        <div>
          Input : {testcase3Input}
          <br />
          Output : {testcase3CorrectOutput}
          <br />
          Your Output : {testcase3UserOutput}
        </div>
      );
    }
  };

  // 채점결과가 변경될 때마다 채점 관련 변수들을 변경
  useEffect(() => {
    if (
      props.gradeResult !== undefined &&
      props.gradeResult !== {} &&
      props.gradeResult.open_results !== undefined &&
      props.gradeResult.hidden_results !== undefined
    ) {
      setGradeScore(props.gradeResult.score);
      setTestcase1Result(props.gradeResult.open_results[0].result);
      setTestcase1Input(props.gradeResult.open_results[0].input);
      setTestcase1CorrectOutput(
        props.gradeResult.open_results[0].correct_output
      );
      setTestcase1UserOutput(props.gradeResult.open_results[0].your_output);

      setTestcase2Result(props.gradeResult.open_results[1].result);
      setTestcase2Input(props.gradeResult.open_results[1].input);
      setTestcase2CorrectOutput(
        props.gradeResult.open_results[1].correct_output
      );
      setTestcase2UserOutput(props.gradeResult.open_results[1].your_output);

      setTestcase3Result(props.gradeResult.open_results[2].result);
      setTestcase3Input(props.gradeResult.open_results[2].input);
      setTestcase3CorrectOutput(
        props.gradeResult.open_results[2].correct_output
      );
      setTestcase3UserOutput(props.gradeResult.open_results[2].your_output);

      setTestcase4Result(props.gradeResult.hidden_results[0].result);
      setTestcase5Result(props.gradeResult.hidden_results[1].result);
      setTestcase6Result(props.gradeResult.hidden_results[2].result);
    }
  }, [props.gradeResult]);

  // 사용자가 실행버튼을 누르면 실행화면을 보여준다
  if (props.rightSection == 1) {
    return (
      <div className="right1">
        <div className="right1Header">Execution Result</div>
        <div className="right1Content">{props.excuteMessage}</div>
      </div>
    );
  }

  // 사용자가 채점버튼을 누르면 채점화면을 보여준다
  else if (props.rightSection == 2) {
    return (
      <div className="right2">
        <div className="right2Header">Score Result</div>
        <div className="right2Content">
          총점&nbsp;{gradeScore}점<br />
          <br />
          테스트케이스-1: {testcase1Result}
          {gradeResult1()}
          <br />
          <br />
          테스트케이스-2: {testcase2Result}
          {gradeResult2()}
          <br />
          <br />
          테스트케이스-3: {testcase3Result}
          {gradeResult3()}
          <br />
          <br />
          히든 테스트케이스-4: {testcase4Result}
          <br />
          <br />
          히든 테스트케이스-5: {testcase5Result}
          <br />
          <br />
          히든 테스트케이스-6: {testcase6Result}
        </div>
      </div>
    );
  }

  // 사용자가 제출버튼을 누르면 제출하면을 보여준다
  else {
    return (
      <div className="right3">
        <div className="right3Header">Submit Result</div>
        <div className="right3Content">제출결과가 들어갑니다.</div>
      </div>
    );
  }
};

export default Right;
