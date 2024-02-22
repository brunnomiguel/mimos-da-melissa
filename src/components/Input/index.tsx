import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

function Input({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-700 h-14 pl-4 pr-4 bg-white rounded-lg flex items-center gap-4 shadow-default">
      {children}
    </div>
  );
}

function InputSelect({ children, ...rest }: SelectFieldProps) {
  return (
    <select
      className="w-20 outline-none font-medium cursor-pointer bg-white"
      {...rest}
    >
      {children}
    </select>
  );
}

function InputField({ ...rest }: InputFieldProps) {
  return (
    <input
      className="w-full text-xl outline-none bg-white text-text-900 placeholder:text-text-900"
      {...rest}
    />
  );
}

Input.Field = InputField;
Input.Select = InputSelect;

export { Input };
