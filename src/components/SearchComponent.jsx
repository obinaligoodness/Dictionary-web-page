"use client"
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "@/ThemeProvider";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
const SearchComponent = ({setSearchProps}) => {
     const { theme } = useContext(ThemeContext);
     const [search,setSearch] = useState("")
     const handleChange = (event) => {
        setSearch(event.target.value);
        setSearchProps(event.target.value);
    };
    
    return (
        <div>
            <div className="w-full">
                <TextField
                    size="medium"
                    onChange={handleChange}
                    value={search}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlined fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    className="w-full bg-[#f4f4f4] dark:bg-[#1f1f1f] rounded-[20px]" 
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderRadius: "20px", 
                            },
                            "&:hover fieldset": {
                                borderColor: "black",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "black",
                            },
                        },
                        "& .MuiOutlinedInput-input": {
                            fontSize: "20px", 
                            color: theme === "light" ? "#434343" : "white", 
                            padding: "10px 14px", 
                        },
                    }}
                />

            </div>
        </div>
    )
}
export default SearchComponent;