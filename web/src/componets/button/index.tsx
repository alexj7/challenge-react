import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Texto del botón.
   */
  text?: string;

  /**
   * Aditional Classname to control Button Layout.
   */
  className?: string;

  /**
   * icon for button.
   */
  icon?: JSX.Element;

  /**
   * Callback function to trigger when button is clicked.
   */
  onClick: () => void;
}

/**
 * button component.
 *
 * @param {ButtonProps}
 * @returns {JSX.Element}
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  className,
  onClick,
  ...restProps
}) => {
  return (
    <button
      className={`h-14 bg-blue-500 rounded p-4 flex justify-center font-open-sans font-bold text-lg text-white ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {text}

      {icon && icon}
    </button>
  );
};
