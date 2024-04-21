import { useState } from "react";

/**
 * Custom hook for managing a sample value.
 *
 * @param initialValue - The initial value to be set.
 * @returns An object containing the current value and a function to update the value.
 */
export const useSampleHook = (initialValue: any) => {
  // State to hold the current value
  const [value, setValue] = useState(initialValue);

  // Function to update the value
  const updateValue = (newValue: any) => {
    setValue(newValue);
  };

  // Return an object with the current value and the update function
  return { value, updateValue };
};
