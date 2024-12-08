import React, { useState } from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import TheTextInput from "../components/TheTextInput";

const TheDriverSignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TheReactHelmet title="Sign-Up | Driver" />

      {JSON.stringify(formData)}

      <div className="p-5">
        <h3 className=" text-gray-900 text-xl font-semibold my-8 text-center">
          Join with Us &{" "}
          <span className=" text-yellow-500 bg-gray-900 px-4 py-2 rounded">
            Start Your Earnings
          </span>{" "}
        </h3>

        <form
          method="post"
          className=" bg-white p-7 rounded-md w-full max-w-[74rem] mx-auto"
        >
          <TheTextInput
            label={"Name"}
            id={"name"}
            placeholder={"Enter your name"}
            value={formData.name}
            onChange={handleOnChange}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default TheDriverSignUpPage;
