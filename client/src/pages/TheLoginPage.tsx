import React from "react";
import TheTextInput from "../components/TheTextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import TheReactHelmet from "../components/TheReactHelmet";
import ThePasswordInput from "../components/ThePasswordInput";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import apiEndPoint from "../common/apiEndPoint";
import TheSelectInput from "../components/TheSelectInput";
import role from "../utils/userRole";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/user/userSlice";

const TheLoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // Zod validation
  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, { message: "Password must be at least 08 characters" })
      .max(15, { message: "Password must be within 15 characters" }),

    role: z.string().min(1, { message: "This field is required" }),
  });

  type ValidationSchemaType = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<ValidationSchemaType> = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(apiEndPoint.login.url, {
        method: apiEndPoint.login.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const respData = await response.json();
      if (respData?.status === 404) {
        toast.error(respData?.message);
        return;
      }

      if (respData?.status === 401) {
        toast.error(respData?.message);
        return;
      }

      if (respData?.status === 200 && !respData?.error) {
        const { role } = respData?.userData;
        if (role === "driver") {
          navigate("/driver-dashboard");
        }

        if (role === "passenger") {
          dispatch(userLogin(respData?.userData));
          navigate("/passenger-dashboard");
        }
      }
      console.log(respData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TheReactHelmet title={"Login | City-Taxi"} />
      <div className=" container mx-auto p-1 sm:p-5 flex justify-center mt-20">
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[6rem] login-background-gradient-image p-3 sm:p-10 rounded-lg w-full max-w-2xl"
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

          <TheSelectInput
            label="Role"
            entries={role}
            labelTextColor="text-white"
            id="role"
            register={register("role")}
            errors={errors.role}
            required
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
