import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registerUser from "../../actions/LoginScreens/register";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const SignUpSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    userid: Yup.string().required("User ID is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const signUpHandler = async (formData) => {
    try {
      console.log("user:", formData);
      const data = {
        userName: formData?.username,
        userId: formData?.userid,
        email: formData?.email,
        mobileNumber: formData?.phoneNumber,
        password: formData?.password,
      };
      console.log(data);
      const response = await registerUser(data);
      navigate("/");
    } catch (errors) {
      console.log("Error whing signup", errors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(signUpHandler)}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">User ID</label>
          <input
            type="text"
            {...register("userid", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Phone Number</label>
          <input
            type="Number"
            {...register("phoneNumber", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
        <div className="mt-2 ml-10">
          <span className=" flex gap-2">
            Already have an account?
            <a className="underline font-bold" href="/">
              Log in
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
