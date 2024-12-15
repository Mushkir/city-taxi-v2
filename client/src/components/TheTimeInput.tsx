import React, { FunctionComponent } from "react";

interface TheTimeInputProps {
  id: string;
  label: string;
  required: boolean;
  register: any;
  errors?: { message?: string };
}

const TheTimeInput: FunctionComponent<TheTimeInputProps> = ({
  id,
  label,
  required,
  register,
  errors,
}) => {
  return (
    <div className="flex w-full flex-col gap-1.5 mb-4">
      <label htmlFor={id} className="font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="time"
        name={id}
        id={id}
        className="bg-slate-200 p-2 rounded w-full"
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

export default TheTimeInput;
