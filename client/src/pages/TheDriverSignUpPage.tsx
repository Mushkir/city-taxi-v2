import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TheReactHelmet from "../components/TheReactHelmet";
import TheTextInput from "../components/TheTextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ThePasswordInput from "../components/ThePasswordInput";

const TheDriverSignUpPage = () => {
  const signUpSchema = z
    .object({
      name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(20, { message: "Name must be at within 20 characters" }),
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid email address"),

      phoneNumber: z
        .string()
        .min(10, { message: "Phone number must be 10 characters" })
        .max(10, { message: "Phone number must be 10 characters" }),

      username: z
        .string()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(20, { message: "Name must be within 20 characters" }),

      password: z
        .string()
        .min(6, { message: "Password must be at least 08 characters" })
        .max(15, { message: "Password must be within 15 characters" }),

      confirmPassword: z
        .string()
        .min(6, { message: "Password must be at least 08 characters" }),

      addressLine: z
        .string()
        .min(5, { message: "Address Line must be at least 05 characters" })
        .max(20, { message: "Address Line must be within 20 characters" }),

      city: z
        .string()
        .min(5, { message: "City must be at least 03 characters" })
        .max(20, { message: "City must be within 20 characters" }),

      country: z
        .string()
        .min(5, { message: "Country must be at least 03 characters" })
        .max(20, { message: "Country must be within 20 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords does not match",
    });

  type ValidationSchemaType = z.infer<typeof signUpSchema>;
  // Define the input types for the form
  type Inputs = {
    name: string;
    email: string;
    phoneNumber: number;
    username: string;
    password: string;
    confirmPassword: string;
    addressLine: string;
    city: string;
    country: string;
  };

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Page metadata */}
      <TheReactHelmet title="Sign-Up | Driver" />

      <div className="p-5">
        <h3 className="text-gray-900 text-xl font-semibold my-8 text-center">
          Join with Us &{" "}
          <span className="text-yellow-500 bg-gray-900 px-4 py-2 rounded">
            Start Your Earnings
          </span>
        </h3>

        {/* Profile Img */}
        <div className="w-full max-w-[10rem] h-[10rem] rounded-full bg-yellow-500 mx-auto p-[0.2rem] mb-5 relative overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
            alt=""
          />

          <span className=" bg-slate-300 bg-opacity-60 p-2 absolute w-full text-center top-[6.5rem] pb-6 pt-2 cursor-pointer opacity-0 hover:opacity-100 transition-all">
            Upload profile
          </span>
        </div>

        <form
          method="post"
          className="bg-white p-7 rounded-md w-full max-w-[74rem] mx-auto mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex justify-between gap-10 mb-4">
            {/* Name Input */}
            <TheTextInput
              label="Name"
              type="text"
              id="name"
              placeholder="Enter your name"
              register={register("name", { required: true })}
              errors={errors.name}
              required
            />

            {/* Email */}
            <TheTextInput
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email address"
              register={register("email")}
              errors={errors.email}
              required
            />

            <TheTextInput
              label="Phone Number"
              type="number"
              id="phoneNumber"
              placeholder="Enter the phone number"
              register={register("phoneNumber")}
              errors={errors.phoneNumber}
              required
            />
          </div>

          {/* Second row */}
          <div className=" flex justify-between gap-10 mb-4">
            <TheTextInput
              label="Username"
              type="text"
              id="username"
              placeholder="Enter your username"
              register={register("username")}
              errors={errors.username}
              required
            />

            <ThePasswordInput
              label={"Password"}
              id={"password"}
              placeholder={"Enter your password"}
              register={register("password")}
              errors={errors.password}
              required
            />

            <ThePasswordInput
              label="Confirm Password"
              required
              id="confirmPassword"
              placeholder="Re-enter your password"
              register={register("confirmPassword")}
              errors={errors.confirmPassword}
            />
          </div>

          {/* Third row */}
          <div className=" flex items-center gap-10 mb-4">
            <TheTextInput
              label="Address Line 1"
              id="addressLine"
              register={register("addressLine")}
              errors={errors.addressLine}
              required
              placeholder="Ex: No. 246/A, Meera Nagar Road"
            />

            <TheTextInput
              label="City"
              id="city"
              placeholder="Enter your city name"
              register={register("city")}
              required
              errors={errors.city}
            />

            <TheTextInput
              label="Country"
              id="country"
              placeholder="Enter your country name"
              register={register("country")}
              errors={errors.country}
              required
            />
          </div>

          {/* Fourth row */}
          <div></div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-600 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheDriverSignUpPage;
