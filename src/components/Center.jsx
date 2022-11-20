import SaveIcon from "@mui/icons-material/Save";
import CodeEditor from "./CodeEditor";
import FolderIcon from "@mui/icons-material/Folder";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Button from "react-bootstrap/Button";
import { executeCode } from "../api/api";
import "./Center.scss";

const Center = (props) => {
  const handleExecuteCode = () => {
    props.setRightSection(1);
    console.log(props.code);
    executeCode(props.code)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGradeCode = () => {
    props.setRightSection(2);
  };

  const handleSubmitCode = () => {
    props.setRightSection(3);
  };

  return (
    <div className="center">
      <div className="centerHeader">
        Code Editor
        <SaveIcon style={{ margin: "auto 15px", color: "#FFFFFF" }} />
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
              checked
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
            <button type="button" class="btn btn-outline-secondary">
              1
            </button>
            <button type="button" class="btn btn-outline-secondary">
              2
            </button>
            <button type="button" class="btn btn-outline-secondary">
              3
            </button>
          </div>
        </div>
      </div>
      <div className="centerContent">
        <CodeEditor code={props.code} setCode={props.setCode} />
      </div>
      <div className="centerFooter">
        <FolderIcon style={{ marginRight: "10px", color: "#FFFFFF" }} />
        <RefreshIcon style={{ marginRight: "10px", color: "#FFFFFF" }} />
        <FileCopyIcon style={{ marginRight: "10px", color: "#FFFFFF" }} />
        <SimCardDownloadIcon
          style={{ marginRight: "10px", color: "#FFFFFF" }}
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
