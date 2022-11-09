import SaveIcon from "@mui/icons-material/Save";
import CodeEditor from "./CodeEditor";
import FolderIcon from "@mui/icons-material/Folder";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Button from "react-bootstrap/Button";

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
          paddingRight: "15px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        코드 입력
        <SaveIcon style={{ marginLeft: "auto", color: "#414E5A" }} />
        <div
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
          }}
        >
          2
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#414E5A",
            color: "#FFFFFF",
          }}
        >
          3
        </div>
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
        <CodeEditor />
      </div>
      <div
        className="centerFooter"
        style={{
          height: "50px",
          paddingLeft: "20px",
          paddingRight: "20px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FolderIcon style={{ marginRight: "15px", color: "#414E5A" }} />
        <RefreshIcon style={{ marginRight: "15px", color: "#414E5A" }} />
        <FileCopyIcon style={{ marginRight: "15px", color: "#414E5A" }} />
        <SimCardDownloadIcon style={{ color: "#414E5A" }} />
        <Button
          variant="secondary"
          style={{
            marginLeft: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          실행
        </Button>
        <Button
          variant="secondary"
          style={{
            marginLeft: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          채점
        </Button>
        <Button
          variant="primary"
          style={{
            marginLeft: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          제출
        </Button>
      </div>
    </div>
  );
};

export default Center;
