"use client";
import { createContext, useState, useEffect } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const fontOptions = [
    { label: "Sans", value: "font-sans" },
    { label: "Serif", value: "font-serif" },
    { label: "Monospace", value: "font-mono" },
  ];

  // Default font (don't access localStorage here)
  const [font, setFont] = useState("font-sans");

  

  // Update localStorage & apply font class to <html>
  useEffect(() => {
    document.documentElement.classList.remove("font-sans", "font-serif", "font-mono");
    document.documentElement.classList.add(font);
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont, fontOptions }}>
      {children}
    </FontContext.Provider>
  );
};
