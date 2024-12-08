import React from "react";

interface TheTextInputProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  register: any;
  errors?: { message?: string };
  // value: string;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Type for the onChange function
}

const TheTextInput: React.FC<TheTextInputProps> = ({
  label,
  id,
  placeholder,
  required = false,
  register,
  errors,
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
        id={id}
        className="bg-slate-200 p-2 rounded w-full"
        placeholder={placeholder}
        {...register}
      />
      {errors && (
        <span className="text-sm text-red-600 font-semibold">
          {errors.message}
        </span>
      )}
    </div>
  );
};

export default TheTextInput;
