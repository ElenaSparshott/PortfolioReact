import { useState } from "react";
import {Sun, Moon, TruckElectricIcon} from "lucide-react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    };

    return <button onClick={toggleTheme}>{isDarkMode ? <Sun className="h-6 w-6 text-yellow-400"/> : <Moon className="h-6 w-6 text-blue-800"/>}</button>
};