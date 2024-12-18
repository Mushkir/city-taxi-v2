import React, { FunctionComponent } from "react";

interface TheReadOnlyLabelProps {
  name: string;
  label: string;
  value: string;
}

const TheReadOnlyLabel: FunctionComponent<TheReadOnlyLabelProps> = ({
  name,
  label,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className=" font-semibold">
        {label}
      </label>
      <label htmlFor={name} className="bg-slate-200 p-2 rounded mt-2">
        {value}
      </label>
    </div>
  );
};

export default TheReadOnlyLabel;
