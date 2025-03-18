import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./dropdown-menu";
export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (<DropdownMenuItem onClick={toggleTheme}>
      {theme === "dark" ? (<Moon />) : (<Sun />)}
      <span>
        Appearance
      </span>
      <span className="sr-only">
        Toggle
      </span>
    </DropdownMenuItem>);
}
