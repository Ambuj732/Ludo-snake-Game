import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import login from "../../actions/LoginScreens/login";
import * as Yup from "yup";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const LoginSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const loginHandler = async (formData) => {
    try {
      console.log("formData:", formData);
      const data = {
        userId: formData?.userID,
        password: formData?.password,
      };

      const response = await login(data);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.profile));
      navigate("/home-page");
    } catch (error) {
      console.log("Error while loggin ", error);
    }
  };

  const goToPage = () => {
    navigate("/sign-up");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">UserId</label>
          <input
            type="text"
            {...register("userID", { required: true })}
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
          Login
        </button>
        <div className=" mt-2 font-bold">
          <span>Don't have an account? </span>
          <a
            onClick={goToPage}
            className="underline text-blue-800 font-bold cursor-pointer"
          >
            Register here
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
