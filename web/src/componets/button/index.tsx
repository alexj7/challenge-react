import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Texto del botón.
   */
  text: string;

  /**
   * Right icon fot button.
   */
  icon: JSX.Element;

  /**
   * Callback que se ejecutará al hacer clic en el botón.
   */
  onClick: () => void;
}

/**
 * Componente de botón reutilizable.
 *
 * @param {ButtonProps} props - Props para el componente Botón.
 * @returns {JSX.Element} Elemento JSX que representa el botón.
 */
export const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className={`bg-blue-500 rounded p-4 flex w-full justify-center font-open-sans font-bold text-lg text-white`}
      onClick={onClick}
    >
      {text}

      {icon && <div className="mt-1 ml-2">{icon}</div>}
    </button>
  );
};
