import React, { ChangeEvent } from "react";

interface TheTextInputProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Type for the onChange function
}

const TheTextInput: React.FC<TheTextInputProps> = ({
  label,
  id,
  placeholder,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label htmlFor={id} className="font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        name={id}
        className="bg-slate-200 p-2 rounded w-full"
        placeholder={placeholder}
        onChange={onChange} // Ensure this matches the prop
        required={required}
        value={value}
      />
    </div>
  );
};

export default TheTextInput;
