import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TheReactHelmet from "../components/TheReactHelmet";
import TheTextInput from "../components/TheTextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ThePasswordInput from "../components/ThePasswordInput";
import TheTimeInput from "../components/TheTimeInput";
import uploadImage from "../utils/cloudinaryImageUpload";
import apiEndPoint from "../common/apiEndPoint";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import TheProfileImageView from "../components/TheProfileImageView";

const TheDriverSignUpPage = () => {
  const inputRef = useRef(null);

  const [image, setImage] = useState("");
  const [showProfileImgError, setShowProfileImgError] = useState(false);

  const navigate = useNavigate();

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
        .min(3, { message: "Username must be at least 3 characters" })
        .max(20, { message: "Username must be within 20 characters" }),

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
        .max(50, { message: "Address Line must be within 50 characters" }),

      city: z
        .string()
        .min(5, { message: "City must be at least 03 characters" })
        .max(20, { message: "City must be within 20 characters" }),

      country: z
        .string()
        .min(5, { message: "Country must be at least 03 characters" })
        .max(20, { message: "Country must be within 20 characters" }),

      taxiNumber: z
        .string()
        .min(3, { message: "Number plate must be at least 03 characters" }),

      idCardNo: z
        .string()
        .min(12, { message: "ID card number must be 12 characters" })
        .max(12, { message: "ID card number must be 12 characters" }),

      availableTime: z.string().min(1, { message: "This field is required" }),
      finishingTime: z.string().min(1, { message: "This field is required" }),
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
    taxiNumber: string;
    idCardNo: string;
    availableTime: string;
    finishingTime: string;
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.dir(e.target.files[0]);

    const imgFile = e.target.files[0];

    const imgResults = await uploadImage(imgFile);
    setImage(imgResults?.secure_url);
    // console.log(imgResults?.secure_url);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;

    inputRef.current?.click();
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
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!image) {
      setShowProfileImgError(true);
      setTimeout(() => {
        setShowProfileImgError(false);
      }, 5000);
      return;
    }
    const formData = { ...data, profileImage: image };
    try {
      const response = await fetch(apiEndPoint.driverSignUp.url, {
        method: apiEndPoint.driverSignUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const respData = await response.json();

      if (respData?.status === 400) {
        toast.error(respData?.message);
      }
      if (!respData.error && respData?.status === 201) {
        navigate("/login");
        toast.success(respData?.message);
      }
      // console.log(respData);
      // console.log(formData);
    } catch (error) {
      toast.error(
        "An error occured! Currently unable to proceed signup process..."
      );
      console.error(error);
    }
  };

  return (
    <div>
      {/* Page metadata */}
      <TheReactHelmet title="Sign-Up | Driver" />

      <div className="p-2 sm:p-5">
        <h3 className="text-gray-900 text-xl font-semibold my-8 text-center">
          Join with Us &{" "}
          <span className="text-yellow-500 bg-gray-900 px-4 py-2 rounded">
            Start Your Earnings
          </span>
        </h3>

        {/* Profile Img */}
        <div className="max-w-[5rem] h-[5rem] sm:max-w-[10rem] sm:h-[10rem] rounded-full bg-yellow-500 mx-auto p-[0.2rem] mb-5 relative overflow-hidden">
          <TheProfileImageView image={image} />

          <span
            onClick={handleButtonClick}
            className=" bg-slate-300 bg-opacity-60 p-2 absolute w-full text-center top-[6.5rem] pb-6 pt-2 cursor-pointer opacity-0 hover:opacity-100 transition-all"
          >
            Upload profile
          </span>
        </div>
        {showProfileImgError && (
          <small className="text-red-500 block text-center -mt-2 mb-3">
            Please upload your profile image.
          </small>
        )}

        <form
          method="post"
          className="bg-white p-2 sm:p-7 rounded-md w-full max-w-[74rem] mx-auto mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="sm:flex justify-between gap-10 mb-4">
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
          <div className="sm:flex justify-between gap-10 mb-4">
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

            <TheTextInput
              label="Taxi Number"
              required
              id="taxiNumber"
              placeholder="Ex: EP CAD - 9699"
              register={register("taxiNumber")}
              errors={errors.taxiNumber}
            />
          </div>

          {/* Third row */}
          <div className="sm:flex items-center gap-10 mb-4">
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
          <div className=" flex gap-5">
            <TheTextInput
              label="ID Card No."
              required
              id="idCardNo"
              placeholder="Enter your ID card number"
              register={register("idCardNo")}
              errors={errors.idCardNo}
            />

            <div className="mt-2 w-full">
              <label className="font-semibold">
                Available Time Period<span className="text-red-500">*</span>
              </label>
              <div className=" flex items-center gap-5 mt-1">
                <TheTimeInput
                  id="availableTime"
                  label="From"
                  required
                  register={register("availableTime")}
                  errors={errors.availableTime}
                />

                {/* Finishing time */}
                <TheTimeInput
                  id="finishingTime"
                  label="To"
                  required
                  register={register("finishingTime")}
                  errors={errors.finishingTime}
                />
              </div>
            </div>
          </div>

          <input
            type="file"
            onChange={(e) => handleFileUpload(e)}
            ref={inputRef}
            className="hidden"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-600 px-4 py-2 rounded mt-4 w-full sm:max-w-[10rem] hover:bg-yellow-700 transition-all border border-black text-black font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheDriverSignUpPage;
