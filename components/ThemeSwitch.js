import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Checking if component is mounted, since localStorage is not accesible until then.
  if (!mounted) return null;

  let checked = localStorage.getItem("theme") === "light" ? false : true;

  const onClick = () => {
    checked = !checked;
    setTheme(checked ? "dark" : "light");
    localStorage.setItem("clicked", "yes");
  };

  return (
    <div className="px-2">
      <DarkModeSwitch onChange={onClick} checked={checked} size={25} />
    </div>
  );
};

export default ThemeSwitch;
