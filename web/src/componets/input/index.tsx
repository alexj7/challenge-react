import { InputHTMLAttributes, useEffect, useState } from "react";
import { Loader } from "../Loader";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label tag for input.
   */
  label?: string;

  /**
   * Identify loading indicator.
   */
  isLoading?: boolean;

  /**
   * Aditional Classname to control Input layout.
   */
  className?: string;

  /**
   * Input placeholder .
   */
  placeholder?: string;

  /**
   * Identify required inputs with '*'.
   */
  required?: boolean;

  /**
   * Acutal value for input.
   */
  value?: string;
}

/**
 * Input component.
 *
 * @param {InputProps}
 * @returns {JSX.Element}
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  className,
  isLoading,
  required = false,
  value = '',
  onChange,
  ...restProps
}) => {

  const [inputValue, setInputValue] = useState<string>('')

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setInputValue(event.target.value)
    onChange?.(event)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={`flex flex-col relative w-full ${className}`}>
      {label && (
        <label className="font-open-sans font-bold text-lg text-gray-700 mb-1">
          {label}
        </label>
      )}

      {required && (
        <span className="font-open-sans text-lg text-gray-600 mb-1 absolute top-7 right-2">
          *
        </span>
      )}

      <input
        className="h-14 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        value={inputValue}
        placeholder={placeholder}
        onChange={_onChange}
        {...restProps}
      />

      {isLoading &&
        <div className="absolute right-5 top-5">
          <Loader />
        </div>
      }

    </div>
  );
};
