import React, { ChangeEvent, useRef, useState } from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import TheTextInput from "../components/TheTextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ThePasswordInput from "../components/ThePasswordInput";
import TheProfileImageView from "../components/TheProfileImageView";
import uploadImage from "../utils/cloudinaryImageUpload";
import { toast } from "react-toastify";
import apiEndPoint from "../common/apiEndPoint";
import { useNavigate } from "react-router";

const ThePassengerSignUpPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [showProfileImgError, setShowProfileImgError] = useState(false);

  const inputRef = useRef(null);

  // Zod Validation
  const passengerSchema = z
    .object({
      passengerName: z
        .string()
        .min(3, { message: "Name must be at least 03 characters" })
        .max(20, { message: "Name must be within 20 characters" }),

      passengerEmail: z.string().email(),

      passengerPhoneNo: z
        .string()
        .min(10, { message: "Phone number must contain at least 10 numbers" })
        .max(10, { message: "Phone number must contain within 10 numbers" }),

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

      idCardNo: z
        .string()
        .min(12, { message: "ID card number must be 12 characters" })
        .max(12, { message: "ID card number must be 12 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords does not match",
    });

  type passengerSchemaType = z.infer<typeof passengerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<passengerSchemaType>({
    resolver: zodResolver(passengerSchema),
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFiles = e.target.files[0];

    const passengerImg = await uploadImage(imageFiles);
    setImage(passengerImg.secure_url);
    // console.log(passengerImg);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inputRef || !inputRef.current) return;

    inputRef.current?.click();
  };

  // Sign-up function
  const onSubmit: SubmitHandler<passengerSchemaType> = async (data) => {
    if (!image) {
      setShowProfileImgError(true);
      toast.error("Please upload your profile picture.");

      setTimeout(() => {
        setShowProfileImgError(false);
      }, 5000);
      return;
    }

    const formData = { ...data, profileImg: image };
    // console.log(formData);

    try {
      const response = await fetch(apiEndPoint.passengerSignUp.url, {
        method: apiEndPoint.passengerSignUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const respData = await response.json();

      if (respData?.status === 400) {
        toast.error(respData?.message);
      }

      if (respData?.status === 201 && !respData?.error) {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      // console.log(respData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TheReactHelmet title="Sign-Up | Passenger" />

      <div className="p-2 sm:p-5">
        <h3 className="text-gray-900 text-xl font-semibold my-8 text-center">
          Ride with us{" "}
          <span className="text-yellow-500 bg-gray-900 px-4 py-2 rounded">
            for a top-notch taxi experience!
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
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-2 sm:p-7 rounded-md w-full max-w-[74rem] mx-auto mb-8"
        >
          {/* First row */}
          <div className="sm:flex justify-between gap-10 mb-4">
            <TheTextInput
              label="Name"
              required
              id="passengerName"
              placeholder="Enter your name"
              register={register("passengerName")}
              errors={errors.passengerName}
            />

            <TheTextInput
              label="Email"
              id="passengerEmail"
              type="email"
              required
              placeholder="Enter your email"
              register={register("passengerEmail")}
              errors={errors.passengerEmail}
            />

            <TheTextInput
              label="Phone number"
              required
              type="number"
              id="passengerPhoneNo"
              placeholder="Enter your phone number"
              register={register("passengerPhoneNo")}
              errors={errors.passengerPhoneNo}
            />
          </div>

          {/* Second row */}
          <div className="sm:flex justify-between gap-10 mb-4">
            <TheTextInput
              label="Username"
              id="username"
              required
              placeholder="Enter your username"
              register={register("username")}
              errors={errors.username}
            />

            <ThePasswordInput
              label="Password"
              required
              id="password"
              placeholder="Enter your password"
              register={register("password")}
              errors={errors.password}
            />

            <ThePasswordInput
              label="Confirm password"
              id="confirmPassword"
              placeholder="Password must be same"
              register={register("confirmPassword")}
              errors={errors.confirmPassword}
            />
          </div>

          {/* Third row */}
          <div className="sm:flex justify-between gap-5 mb-4">
            <TheTextInput
              label="Address line"
              required
              id="addressLine"
              placeholder="Ex: No. 246/A, Meera Nagar Road"
              register={register("addressLine")}
              errors={errors.addressLine}
            />

            <TheTextInput
              label="City"
              id="city"
              required
              placeholder="Ex: Nintavur"
              register={register("city")}
              errors={errors.city}
            />

            <TheTextInput
              label="Country"
              id="country"
              placeholder="Ex: Sri Lanka"
              register={register("country")}
              errors={errors.country}
            />

            <TheTextInput
              label="ID Card No."
              id="idCardNo"
              placeholder="Enter your ID Card Number"
              register={register("idCardNo")}
              errors={errors.idCardNo}
            />
          </div>

          <div>
            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={(e) => {
                handleFileUpload(e);
              }}
            />
          </div>

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

export default ThePassengerSignUpPage;
