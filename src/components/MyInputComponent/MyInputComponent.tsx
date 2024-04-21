import { useState, ChangeEvent } from "react";

/**
 * MyInputComponent is a functional component in React.
 * It renders an input field and maintains its state.
 */
export const MyInputComponent: React.FC = () => {
  // State variable 'value' is initialized as an empty string.
  const [value, setValue] = useState<string>("");

  /**
   * This function handles the change event of the input field.
   * It updates the state variable 'value' with the current value of the input field.
   *
   * @param event - The change event of the input field.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // The component renders an input field. The value and onChange props are set.
  return <input type="text" onChange={handleChange} value={value} />;
};
