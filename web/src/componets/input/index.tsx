import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label tag for input.
   */
  label?: string;

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

  /**
   *  Callback function to trigger when input value change.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  required = false,
  value,
  onChange,
  ...restProps
}) => {
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
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};
