import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Etiqueta para el input.
   */
  label: string;

  /**
   * Placeholder en el input.
   */
  placeholder: string;

  /**
   * Valor actual del input.
   */
  value: string;

  /**
   * Callback que se ejecutará al cambiar el valor del input.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Componente de input reutilizable.
 *
 * @param {InputProps} props - Props para el componente Input.
 * @returns {JSX.Element} Elemento JSX que representa el input.
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  ...restProps
}) => {
  return (
    <div className="flex flex-col mb-5 relative">
      <label className="font-open-sans font-bold text-lg text-gray-700 mb-1">
        {label}
      </label>
      <span className="font-open-sans text-lg text-gray-600 mb-1 absolute top-7 right-2">
        *
      </span>
      <input
        className="h-14 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};
