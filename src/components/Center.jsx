import SaveIcon from "@mui/icons-material/Save";
import CodeEditor from "./CodeEditor";
import FolderIcon from "@mui/icons-material/Folder";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Button from "react-bootstrap/Button";
import { saveCodeInDB, executeCode, gradeCode } from "../api/api";
import "./Center.scss";

const Center = (props) => {
  const handleSaveCode = () => {
    // 코드를 슬롯에 저장하는 API요청
    saveCodeInDB(
      props.selectedProblemID,
      0,
      props.code,
      Number(props.selectedCode) + 1
    )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  // 코드슬롯을 변경하였을 경우 현재 선택된 코드슬롯 번호를 바꾸고 코드내용을 불러온다.
  const handleChangeCodeSlot = (event) => {
    props.setSelectedCode(event.target.value);
    let temp = "";
    props.userCode.map((code, index) => {
      if (code.code_idx === Number(event.target.value) + 1) {
        temp = code.user_code;
      }
    });
    props.setCode(temp);
  };

  // 제출코드를 눌렀을 경우 현재 출력 코드를 제출된 코드내용으로 변경시킨다.
  const handleLoadSubmitCode = (event) => {
    let temp = "";
    props.userCode.map((code, index) => {
      if (code.code_idx === Number(event.target.value) + 4) {
        temp = code.user_code;
      }
    });
    props.setCode(temp);
  };

  // 로컬에서 불러온 파일에서 텍스트를 읽는 함수
  const processFile = (file) => {
    var reader = new FileReader();
    reader.onload = function () {
      props.setCode(reader.result);
    };
    reader.readAsText(file /* optional */);
  };

  // 파일에서 코드 불러오기
  const handleLoadCode = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
      processFile(event.target.files[0]);
    };
    input.click();
  };

  // 코드 새로고침
  const handleRefreshCode = () => {
    props.setCode("default_code");
  };

  // 코드 복사
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      alert("CODE Copyed successfully");
    } catch (err) {
      alert("CODE Copy failed");
    }
  };

  // 코드 텍스트 파일 형태로 다운로드
  const handleDownloadCode = () => {
    let fileName = `code_download.txt`;
    let output = props.code;
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element); // FireFox
    element.click();
  };

  const handleExecuteCode = () => {
    props.setRightSection(1);
    executeCode(props.code)
      .then((res) => {
        props.setExecuteResult(res.data.success);
        props.setExecuteMessage(res.data.message);
        if (!res.data.success) {
          props.setExecuteErrorLine(res.data.line_number);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGradeCode = () => {
    props.setRightSection(2);
    gradeCode(props.code, props.selectedProblemID)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitCode = () => {
    props.setRightSection(3);
  };

  return (
    <div className="center">
      <div className="centerHeader">
        Code Editor
        <SaveIcon
          type="button"
          style={{ margin: "auto 15px", color: "#FFFFFF" }}
          onClick={handleSaveCode}
        />
        <div className="centerSavedBox1">
          <div className="centerSavedBox1Title">code slot</div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              value={0}
              defaultChecked={true}
              onClick={handleChangeCodeSlot}
            />
            <label class="btn btn-outline-secondary" for="btnradio1">
              1
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
              value={1}
              onClick={handleChangeCodeSlot}
            />
            <label class="btn btn-outline-secondary" for="btnradio2">
              2
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
              value={2}
              onClick={handleChangeCodeSlot}
            />
            <label class="btn btn-outline-secondary" for="btnradio3">
              3
            </label>
          </div>
        </div>
        <div className="centerSavedBox2">
          <div className="centerSavedBox2Title">submit code</div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              class="btn btn-outline-secondary"
              value={0}
              onClick={handleLoadSubmitCode}
            >
              1
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              value={1}
              onClick={handleLoadSubmitCode}
            >
              2
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              value={2}
              onClick={handleLoadSubmitCode}
            >
              3
            </button>
          </div>
        </div>
      </div>
      <div className="centerContent">
        <CodeEditor code={props.code} setCode={props.setCode} />
      </div>
      <div className="centerFooter">
        <FolderIcon
          type="button"
          style={{ marginRight: "10px", color: "#FFFFFF" }}
          onClick={handleLoadCode}
        />
        <RefreshIcon
          type="button"
          style={{ marginRight: "10px", color: "#FFFFFF" }}
          onClick={handleRefreshCode}
        />
        <FileCopyIcon
          type="button"
          style={{ marginRight: "10px", color: "#FFFFFF" }}
          onClick={handleCopyCode}
        />
        <SimCardDownloadIcon
          type="button"
          style={{ marginRight: "10px", color: "#FFFFFF" }}
          onClick={handleDownloadCode}
        />
        <Button
          variant="secondary"
          style={{
            marginRight: "10px",
          }}
          onClick={handleExecuteCode}
        >
          Execute
        </Button>
        <Button
          variant="secondary"
          style={{
            marginRight: "10px",
          }}
          onClick={handleGradeCode}
        >
          Score
        </Button>
        <Button variant="secondary" onClick={handleSubmitCode}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Center;
