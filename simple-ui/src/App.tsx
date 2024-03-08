import { parseDate, parseString } from "3wd";
import { useState } from "react";
import "./App.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

function App() {
  const [mode, setMode] = useState("date-to-strings");
  const [inputDate, setInputDate] = useState(new Date("2020-01-01"));
  const [inputString, setInputString] = useState("mailbox.bat.toe");

  return (
    <>
      <div>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={(e, v) => setMode(v)}
          aria-label="text alignment"
        >
          <ToggleButton value="date-to-string">Date to string</ToggleButton>
          <ToggleButton value="string-to-date">String to date</ToggleButton>
        </ToggleButtonGroup>
        {mode === "date-to-string" && (
          <>
            <div>
              <TextField
                id="date"
                label="Date"
                type="date"
                value={inputDate.toISOString().split("T")[0]}
                onChange={(e) => setInputDate(new Date(e.target.value))}
              />
            </div>
            <div>{parseDate(inputDate) || "error"}</div>
          </>
        )}
        {mode === "string-to-date" && (
          <>
            <div>
              <Input
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
              />
            </div>
            <Typography>
              {parseString(inputString)?.toDateString() || "Error"}
            </Typography>
          </>
        )}
      </div>
    </>
  );
}

export default App;
