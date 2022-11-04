import CodeEditor from "./CodeEditor";

const Center = () => {
  return (
    <div
      className="center"
      style={{
        width: "479px",
        borderRight: "1px solid #000000",
        boxSizing: "border-box",
        backgroundColor: "blue",
      }}
    >
      <div
        className="centerHeader"
        style={{
          height: "50px",
          paddingLeft: "30px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        코드 입력
      </div>
      <div
        className="centerContent"
        style={{
          height: "548px",
          borderBottom: "1px solid #000000",
          paddingTop: "10px",
          paddingLeft: "30px",
          boxSizing: "border-box",
          backgroundColor: "#FFFFFF",
        }}
      >
        코드 에디터가 들어갑니다.
      </div>
      <div
        className="centerFooter"
        style={{
          height: "50px",
          paddingLeft: "30px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        코드 푸터가 들어갑니다.
      </div>
    </div>
  );
};

export default Center;
