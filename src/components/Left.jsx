import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Left.scss";

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

  const handleVerifyTestcase1 = (event) => {
    console.log("테스트케이스1 검증");
  };

  const handleVerifyTestcase2 = (event) => {
    console.log("테스트케이스2 검증");
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
    <div className="left">
      <div className="problem">
        <div className="problemHeader">
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <InputLabel id="demo-select-small" style={{ color: "#000000" }}>
              Select Problem
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
        <div className="problemContent">
          <div className="problemContentHeader">
            Problem :&nbsp;{problemTitle}
          </div>
          <div className="problemContentText">{problemContent}</div>
        </div>
        <div className="problemConstraint">
          <div className="problemConstraintHeader">Reference/Constraint</div>
          <div className="problemConstraintText">{problemConstraint}</div>
        </div>
      </div>
      <div className="testcase">
        <div className="testcaseHeader">Testcase :</div>
        <div className="testcase1">
          <div className="testcase1Header">
            Testcase-1
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style={{ float: "right", marginRight: "10px" }}
              onClick={handleVerifyTestcase1}
            >
              Verify
            </button>
          </div>
          <div className="testcase1Content">
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
        <div className="testcase2">
          <div className="testcase2Header">
            Testcase-2
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style={{ float: "right", marginRight: "10px" }}
              onClick={handleVerifyTestcase2}
            >
              Verify
            </button>
          </div>
          <div className="testcase2Content">
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
