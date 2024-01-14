import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  // Step 1: Set initial theme mode state to "light"
  const [themeMode, setThemeMode] = useState("light");

  // Step 2: Define functions to update theme mode
  const lightTheme = () => {
    setThemeMode("light"); // Switch to light theme
  }

  const darkTheme = () => {
    setThemeMode("dark"); // Switch to dark theme
  }

  // Actual change in theme

  // Step 3: Use useEffect to update HTML class based on themeMode changes
  useEffect(() => {
    // Remove existing "light" and "dark" classes from the HTML element
    document.querySelector('html').classList.remove("light", "dark");

    // Add the current themeMode as a class to the HTML element
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
