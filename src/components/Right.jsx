const Right = () => {
  return (
    <div className="right" style={{ width: "480px" }}>
      <div
        className="rightHeader"
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
        className="rightContent"
        style={{ height: "598px", backgroundColor: "#FFFFFF" }}
      >
        터미널이 들어갑니다.
      </div>
    </div>
  );
};

export default Right;
