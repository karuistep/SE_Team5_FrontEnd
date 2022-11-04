import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [lectureTitle, setLectureTitle] = useState("강의제목");
  const [assignmentTitle, setAssignmentTitle] = useState("과제명");
  const [deadline, setdeadline] = useState("마감기한");

  useEffect(() => {
    if (props.lecture != undefined) {
      setLectureTitle(props.lecture.title);
    }

    if (props.assignment != undefined) {
      setAssignmentTitle(props.assignment.title);
      setdeadline(props.assignment.deadline);
    }
  }, [props]);

  console.log("assignment:", props.assignment);

  return (
    <div
      className="header"
      style={{
        height: "50px",
        backgroundColor: "#414E5A",
        display: "flex",
      }}
    >
      <div className="headerLeft" style={{ width: "480px", display: "flex" }}>
        <HomeIcon
          style={{ margin: "auto 30px", fontSize: "30px", color: "#FFFFFF" }}
        />
      </div>
      <div className="headerCenter" style={{ width: "480px", display: "flex" }}>
        <div
          className="subject"
          style={{
            width: "230px",
            height: "20px",
            margin: "auto 5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "3px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {lectureTitle}
        </div>
        <div
          className="week"
          style={{
            width: "230px",
            height: "20px",
            margin: "auto 5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "3px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {assignmentTitle}
        </div>
      </div>
      <div
        className="headerRight"
        style={{ width: "480px", display: "flex", justifyContent: "flex-end" }}
      >
        <div
          className="week"
          style={{
            width: "230px",
            height: "20px",
            margin: "auto 5px",
            backgroundColor: "#FFFFFF",
            borderRadius: "3px",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          제출마감일:&nbsp;{deadline}
        </div>
        <SettingsIcon
          style={{
            float: "right",
            margin: "auto 30px",
            fontSize: "30px",
            color: "#FFFFFF",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
