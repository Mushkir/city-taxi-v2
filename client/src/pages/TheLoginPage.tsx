import React from "react";
import TheTextInput from "../components/TheTextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import TheReactHelmet from "../components/TheReactHelmet";
import ThePasswordInput from "../components/ThePasswordInput";
import { Link } from "react-router";

const TheLoginPage = () => {
  type Inputs = {
    email: string;
    password: string;
  };

  z.object({
    email: z.string().email("Invalid email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <TheReactHelmet title={"Login | City-Taxi"} />
      <div className=" container mx-auto p-5 flex justify-center mt-20">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[6rem] login-background-gradient-image p-10 rounded-lg w-full max-w-2xl"
        >
          {/* Email */}
          <TheTextInput
            label="Email"
            labelTextColor="text-white"
            id="email"
            type="email"
            placeholder="Email Address"
            required
            register={register("email")}
            errors={errors.email}
          />

          {/* Password */}
          <ThePasswordInput
            label="Password"
            labelTextColor={"text-white"}
            required
            id="password"
            placeholder="Password"
            register={register("password")}
            errors={errors.password}
          />

          <button
            type="submit"
            className="bg-yellow-500 w-full px-5 py-2 rounded hover:bg-yellow-600 transition-all font-semibold mt-3"
          >
            Login
          </button>

          <small className="text-white block text-center mt-4 hover:underline">
            <Link to={"/"}>Back to Home</Link>
          </small>
        </form>
      </div>
    </>
  );
};

export default TheLoginPage;
