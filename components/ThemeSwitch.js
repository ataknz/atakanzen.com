import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Checking if component is mounted, since localStorage is not accesible until then.
  if (!mounted) return null;

  let checked = resolvedTheme === "light" ? false : true;

  const onClick = () => {
    checked = !checked;
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="px-2">
      <DarkModeSwitch onChange={onClick} checked={checked} size={25} />
    </div>
  );
};
