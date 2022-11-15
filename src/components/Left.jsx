import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Left = (props) => {
  const [problemTitle, setProblemTitle] = useState("");
  const [problemContent, setProblemContent] = useState("");
  const [problemConstraint, setProblemConstraint] = useState("");
  const [showedTestcase1Input, setShowedTestcase1Input] = useState("");
  const [showedTestcase1Output, setShowedTestcase1Output] = useState("");
  const [showedTestcase2Input, setShowedTestcase2Input] = useState("");
  const [showedTestcase2Output, setShowedTestcase2Output] = useState("");

  const handleChangeProblem = (event) => {
    props.setSelectedProblem(event.target.value);
  };

  useEffect(() => {
    if (
      props.problem !== undefined &&
      props.problem[props.selectedProblem] !== undefined
    ) {
      setProblemTitle(props.problem[props.selectedProblem].title);
      setProblemContent(props.problem[props.selectedProblem].description);
      setProblemConstraint(props.problem[props.selectedProblem].restriction);
    }
  }, [props.problem, props.selectedProblem]);

  useEffect(() => {
    if (props.testcase !== undefined && props.testcase.length >= 1) {
      setShowedTestcase1Input(props.testcase[0].input);
      setShowedTestcase1Output(props.testcase[0].output);
      setShowedTestcase2Input(props.testcase[1].input);
      setShowedTestcase2Output(props.testcase[1].output);
    }
  }, [props.testcase]);

  return (
    <div
      className="left"
      style={{
        width: "479px",
        borderRight: "1px solid #000000",
        boxSizing: "border-box",
      }}
    >
      <div className="problem" style={{ height: "398px" }}>
        <div
          className="problemHeader"
          style={{
            height: "50px",
            paddingLeft: "30px",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ m: 1, width: "50%" }} size="small">
            <InputLabel id="demo-select-small" style={{ color: "#000000" }}>
              문제 선택
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={props.selectedProblem}
              label="Age"
              style={{ backgroundColor: "#FFFFFF" }}
              onChange={handleChangeProblem}
            >
              {props.problem.map((problem, index) => {
                return <MenuItem value={index}>{problem.title}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="problemContent" style={{ height: "210px" }}>
          <div
            className="problemContentHeader"
            style={{
              height: "30px",
              paddingLeft: "30px",
              backgroundColor: "#C6CACE",
              color: "#FFFFFF",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
            }}
          >
            문제:&nbsp;{problemTitle}
          </div>
          <div
            className="problemContentText"
            style={{
              height: "180px",
              padding: "30px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              fontWeight: "700",
            }}
          >
            {problemContent}
          </div>
        </div>
        <div className="problemConstraint" style={{ height: "139px" }}>
          <div
            className="problemConstraintHeader"
            style={{
              height: "30px",
              paddingLeft: "30px",
              backgroundColor: "#C6CACE",
              color: "#FFFFFF",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
            }}
          >
            참조/제약사항
          </div>
          <div
            className="problemConstraintText"
            style={{
              height: "109px",
              padding: "30px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              fontWeight: "700",
            }}
          >
            {problemConstraint}
          </div>
        </div>
      </div>
      <div className="testcase" style={{ height: "249px" }}>
        <div
          className="testcaseHeader"
          style={{
            height: "50px",
            paddingLeft: "30px",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          테스트케이스
        </div>
        <div
          className="testcase1"
          style={{ height: "99px", borderBottom: "1px solid #000000" }}
        >
          <div
            className="testcase1Header"
            style={{
              height: "20px",
              borderBottom: "1px solid #000000",
              paddingLeft: "30px",
              backgroundColor: "#FFD600",
              color: "#000000",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
            }}
          >
            테&nbsp;스&nbsp;트&nbsp;케&nbsp;이&nbsp;스&nbsp;-&nbsp;1
            <span
              classname="testcase1Verify"
              style={{ marginLeft: "auto", marginRight: "10px" }}
            >
              검&nbsp;증
            </span>
          </div>
          <div
            style={{
              height: "78px",
              paddingTop: "5px",
              paddingLeft: "30px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%" }}>Input:</div>
              <div>Output:</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", color: "#6187FF" }}>
                {showedTestcase1Input}
              </div>
              <div style={{ color: "#FF5A5A" }}>{showedTestcase1Output}</div>
            </div>
          </div>
        </div>
        <div className="testcase2" style={{ height: "100px" }}>
          <div
            className="testcase2Header"
            style={{
              height: "21px",
              borderBottom: "1px solid #000000",
              paddingLeft: "30px",
              backgroundColor: "#FFD600",
              color: "#000000",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
            }}
          >
            테&nbsp;스&nbsp;트&nbsp;케&nbsp;이&nbsp;스&nbsp;-&nbsp;2
            <span
              classname="testcase2Verify"
              style={{ marginLeft: "auto", marginRight: "10px" }}
            >
              검&nbsp;증
            </span>
          </div>
          <div
            style={{
              height: "80px",
              paddingTop: "5px",
              paddingLeft: "30px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%" }}>Input:</div>
              <div>Output:</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "45%", color: "#6187FF" }}>
                {showedTestcase2Input}
              </div>
              <div style={{ color: "#FF5A5A" }}>{showedTestcase2Output}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
