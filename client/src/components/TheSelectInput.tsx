import React, { FunctionComponent } from "react";

interface TheSelectInputProps {
  label: string;
  labelTextColor: string;
  id: string;
  required?: boolean;
  register: any;
  errors?: { message?: string };
  entries: object;
}

const TheSelectInput: FunctionComponent<TheSelectInputProps> = ({
  label,
  labelTextColor,
  required,
  id,
  register,
  errors,
  entries,
}) => {
  return (
    <div className="flex w-full flex-col gap-1.5 mb-4">
      <label
        htmlFor={id}
        className={`font-semibold capitalize ${
          labelTextColor ? labelTextColor : "text-black"
        }`}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <select
        id={id}
        name={id}
        {...register}
        className="bg-slate-200 p-2 rounded w-full"
      >
        <option value="">Select an option</option>
        {Object.entries(entries).map((entry, index) => {
          // console.log(entry[0]);
          return (
            <option value={entry[0]} key={index}>
              {entry[1]}
            </option>
          );
        })}
      </select>

      {errors && (
        <span className="text-[0.7rem] sm:text-sm text-red-600 font-semibold">
          {errors.message}.
        </span>
      )}
    </div>
  );
};

export default TheSelectInput;
