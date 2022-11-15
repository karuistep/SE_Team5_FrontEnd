const Right = (props) => {
  if (props.rightSection == 1) {
    return (
      <div className="right1" style={{ width: "480px" }}>
        <div
          className="right1Header"
          style={{
            height: "50px",
            paddingLeft: "30px",
            borderBottom: "1px solid #000000",
            boxSizing: "border-box",
            boxShadow: "1px",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          실행결과
        </div>
        <div
          className="right1Content"
          style={{ height: "598px", backgroundColor: "#FFFFFF" }}
        >
          터미널이 들어갑니다.
        </div>
      </div>
    );
  } else if (props.rightSection == 2) {
    return (
      <div className="right2" style={{ width: "480px" }}>
        <div
          className="right2Header"
          style={{
            height: "50px",
            paddingLeft: "30px",
            borderBottom: "1px solid #000000",
            boxSizing: "border-box",
            boxShadow: "1px",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          채점결과
        </div>
        <div
          className="right2Content"
          style={{ height: "598px", backgroundColor: "#FFFFFF" }}
        >
          채점결과가 들어갑니다.
        </div>
      </div>
    );
  } else {
    return (
      <div className="right3" style={{ width: "480px" }}>
        <div
          className="right3Header"
          style={{
            height: "50px",
            paddingLeft: "30px",
            borderBottom: "1px solid #000000",
            boxSizing: "border-box",
            boxShadow: "1px",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          제출결과
        </div>
        <div
          className="right3Content"
          style={{ height: "598px", backgroundColor: "#FFFFFF" }}
        >
          제출결과가 들어갑니다.
        </div>
      </div>
    );
  }
};

export default Right;
