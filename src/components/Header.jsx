import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import "./Header.scss";
import { Javascript } from "@mui/icons-material";

const Header = (props) => {
  const [deadline, setDeadline] = useState("");

  const handleChangeLecture = (event) => {
    props.setSelectedLecture(event.target.value);
  };

  const handleChangeAssignment = (event) => {
    props.setSelectedAssignment(event.target.value);
  };

  const handleChangeTheme = (event) => {
    console.log("테마변경");
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
    <div className="header">
      <div className="headerLeft">
        <img
          className="skkuLogo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Sungkyunkwan_University_seal.svg/1200px-Sungkyunkwan_University_seal.svg.png"
          alt="성균관대학교 로고"
        />
        <div className="title">Welcome to SKKU Coding Web</div>
        {/* <HomeIcon
          style={{ margin: "auto 30px", fontSize: "30px", color: "#FFFFFF" }}
        /> */}
      </div>
      <div className="headerCenter">
        <FormControl sx={{ m: 1, width: "50%" }} size="small">
          <InputLabel id="demo-select-small" style={{ color: "#000000" }}>
            Select Lecture
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
            Select Assignment
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
      <div className="headerRight">
        <div className="week">
          Due:&nbsp;
          {dayjs(new Date(deadline)).format("YYYY-MM-DD HH:mm")}
        </div>
        <SettingsIcon
          onClick={handleChangeTheme}
          style={{
            float: "right",
            margin: "auto 10px",
            fontSize: "30px",
            color: "#FFFFFF",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
