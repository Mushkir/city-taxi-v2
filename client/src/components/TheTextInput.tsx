import React from "react";

interface TheTextInputProps {
  label: string;
  id: string;
  type?: string;
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
  type = "text",
  placeholder,
  required = false,
  register,
  errors,
}) => {
  return (
    <div className="flex w-full flex-col gap-1.5 mb-4">
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={id}
        id={id}
        className="bg-slate-200 p-2 rounded w-full"
        placeholder={placeholder}
        {...register}
      />
      {errors && (
        <span className="text-[0.7rem] sm:text-sm text-red-600 font-semibold">
          {errors.message}.
        </span>
      )}
    </div>
  );
};

export default TheTextInput;
