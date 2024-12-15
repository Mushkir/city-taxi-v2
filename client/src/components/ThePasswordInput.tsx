import React, { FunctionComponent, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

interface ThePasswordInputProps {
  label: string;
  id: string;
  required?: boolean;
  placeholder: string;
  register: any;
  errors?: { message?: string };
}

const ThePasswordInput: FunctionComponent<ThePasswordInputProps> = ({
  label,
  id,
  required,
  placeholder,
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-col gap-1.5 mb-4">
      <label htmlFor={id} className="font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
        {/* <span className="text-red-500">*</span> */}
      </label>

      <div className="bg-slate-200 rounded w-full flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          className=" w-full bg-slate-200 outline-none p-2"
          name={id}
          id={id}
          placeholder={placeholder}
          {...register}
        />
        <div
          className="pr-2 cursor-pointer"
          onClick={() => {
            handleShowPassword();
          }}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors && (
        <span className="text-[0.7rem] sm:text-sm text-red-600 font-semibold">
          {errors.message}.
        </span>
      )}
    </div>
  );
};

export default ThePasswordInput;
