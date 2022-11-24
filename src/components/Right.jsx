import "./Right.scss";

const Right = (props) => {
  if (props.rightSection == 1) {
    return (
      <div className="right1">
        <div className="right1Header">Execution Result</div>
        <div className="right1Content">{props.excuteMessage}</div>
      </div>
    );
  } else if (props.rightSection == 2) {
    return (
      <div className="right2">
        <div className="right2Header">Score Result</div>
        <div className="right2Content">채점결과가 들어갑니다.</div>
      </div>
    );
  } else {
    return (
      <div className="right3">
        <div className="right3Header">Submit Result</div>
        <div className="right3Content">제출결과가 들어갑니다.</div>
      </div>
    );
  }
};

export default Right;
