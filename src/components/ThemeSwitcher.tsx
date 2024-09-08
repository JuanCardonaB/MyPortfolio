import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  // Function to toggle the theme
  const toggleTheme = (isDark:boolean) => {
    if(isDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  return (
    <div>
        <Switch defaultSelected size="md" onChange={(e) => toggleTheme(e.target.checked)} />
    </div>
  )
};