import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TheReactHelmet from "../components/TheReactHelmet";
import TheTextInput from "../components/TheTextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const TheDriverSignUpPage = () => {
  const signUpSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  });

  type ValidationSchemaType = z.infer<typeof signUpSchema>;
  // Define the input types for the form
  type Inputs = {
    name: string;
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

        <form
          method="post"
          className="bg-white p-7 rounded-md w-full max-w-[74rem] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Input */}
          <TheTextInput
            label="Name"
            id="name"
            placeholder="Enter your name"
            register={register("name", { required: true })}
            errors={errors.name}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheDriverSignUpPage;
