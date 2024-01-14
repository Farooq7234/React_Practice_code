import React from 'react';
import useTheme from '../contexts/theme';

export default function ThemeBtn() {

    // Step 1: Here we extract the values from useContext to use them in Step 2.
    const { themeMode, lightTheme, darkTheme } = useTheme(); // useContext is utilized from the "useTheme" hook.

    // Step 2: This function handles the functionality of the themeBtn.
    const onChangeBtn = (e) => {
        // Extracting the checked status to determine the themeMode.
        const darkModeStatus = e.currentTarget.checked;

        if (darkModeStatus) {
            // If darkModeStatus is true, execute darkTheme to switch to dark mode.
            darkTheme();
        } else {
            // Otherwise, execute lightTheme to switch to light mode.
            lightTheme();
        }
    }
    
    // Note: The checked attribute returns boolean values => e.currentTarget.checked = 'true or false'

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"} // Reflects whether the themeMode is set to dark.
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900"></span>
        </label>
    );
}
