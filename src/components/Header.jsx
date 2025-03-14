"use client";
import { useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FontContext } from "@/FontProvider";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Switch } from "@mui/material";
import { ThemeContext } from "@/ThemeProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header = () => {
  const { font, setFont, fontOptions } = useContext(FontContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(font)
  return (
    <div className="flex justify-between py-6">
      <LibraryBooksOutlinedIcon sx={{ fontSize: "50px" }} />
      <div className="flex gap-2 justify-center items-center">

        <Select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: theme === "dark" ? "white" : "black",
            "& fieldset": { border: "none" },
            "& .MuiSelect-icon": {
              color: theme === "dark" ? "white" : "black",
            },
          }}
        >
          {fontOptions.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>


        <div className="flex items-center justify-center gap-2">

          <Switch
            id="shuffleQuestions"
            name="shuffleQuestions"
            onChange={toggleTheme}
            sx={{
              "& .MuiSwitch-thumb": { backgroundColor: "#757575" },
              "& .Mui-checked .MuiSwitch-thumb": { backgroundColor: "white" },
              "& .Mui-checked": { color: "#757575" },
              "& .Mui-checked + .MuiSwitch-track": { backgroundColor: "#757575" },
            }}
          />
          <button className="cursor-pointer">
            <DarkModeOutlinedIcon className="dark:text-white text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
