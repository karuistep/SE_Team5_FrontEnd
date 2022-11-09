import { useState, useEffect } from "react";

const Left = (props) => {
  const [problemTitle, setProblemTitle] = useState("문제제목");
  const [problemContent, setProblemContent] = useState("문제내용");
  const [problemConstraint, setProblemConstraint] = useState("문제제약사항");

  useEffect(() => {
    if (props.problem != undefined) {
      setProblemTitle(props.problem.title);
      setProblemContent(props.problem.description);
      setProblemConstraint(props.problem.restriction);
    }
  }, [props]);

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
          문제 & 참조/제약사항
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
            테스트케이스 1이 들어갑니다.
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
            테스트케이스 2가 들어갑니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
