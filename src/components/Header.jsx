import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";

const Header = (props) => {
  const [deadline, setDeadline] = useState("");

  const handleChangeLecture = (event) => {
    props.setSelectedLecture(event.target.value);
  };

  const handleChangeAssignment = (event) => {
    props.setSelectedAssignment(event.target.value);
  };

  useEffect(() => {
    if (
      props.assignment !== undefined &&
      props.assignment[props.selectedAssignment] !== undefined
    ) {
      setDeadline(props.assignment[props.selectedAssignment].deadline);
    }
  }, [props.assignment, props.selectedAssignment]);

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
      <div
        className="headerCenter"
        style={{ width: "480px", display: "flex", alignItems: "center" }}
      >
        <FormControl sx={{ m: 1, width: "50%" }} size="small">
          <InputLabel id="demo-select-small" style={{ color: "#000000" }}>
            강의 선택
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={props.selectedLecture}
            label="Age"
            style={{ backgroundColor: "#FFFFFF" }}
            onChange={handleChangeLecture}
          >
            {props.lecture.map((lecture, index) => {
              return <MenuItem value={index}>{lecture.title}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "50%" }} size="small">
          <InputLabel id="demo-select-small" style={{ color: "#000000" }}>
            과제 선택
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={props.selectedAssignment}
            label="Age"
            style={{ backgroundColor: "#FFFFFF" }}
            onChange={handleChangeAssignment}
          >
            {props.assignment.map((assignment, index) => {
              return <MenuItem value={index}>{assignment.title}</MenuItem>;
            })}
          </Select>
        </FormControl>
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
          제출마감일:&nbsp;
          {dayjs(new Date(deadline)).format("YYYY-MM-DD HH:mm")}
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
