import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-black overflow-hidden">
      <div className="relative w-80 h-80 flex justify-center items-center">
        <span
          className="absolute inset-0 border-2 border-white rounded-[38%_62%_63%_37%/41%_44%_56%_59%] animate-spin-slow"
          style={{ "--clr": "#eeff00", animation: "spin 6s linear infinite" }}
        ></span>
        <span
          className="absolute inset-0 border-2 border-white rounded-[41%_44%_56%_59%/38%_62%_63%_37%] animate-spin-reverse"
          style={{ "--clr": "#00ffdd", animation: "spin 4s linear infinite" }}
        ></span>
        <span
          className="absolute inset-0 border-2 border-white rounded-[41%_44%_56%_59%/38%_62%_63%_37%] animate-spin-reverse"
          style={{
            "--clr": "#e900d5",
            animation: "spin-reverse 10s linear infinite",
          }}
        ></span>
        <div className="absolute w-72 h-full flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl text-white">Login Form</h2>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-3 px-5 bg-transparent border-2 border-white rounded-full text-lg text-white outline-none placeholder-white/75"
            />
          </div>
          <div className="w-full relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 px-5 bg-transparent border-2 border-white rounded-full text-lg text-white outline-none placeholder-white/75"
            />
          </div>
          <div className="w-full relative">
            <input
              type="submit"
              value="Sign in"
              className="w-full py-3 px-5 bg-gradient-to-r from-purple-900 to-red-600 rounded-full text-lg text-white cursor-pointer"
            />
          </div>
          <div className="w-full flex justify-between px-5">
            <a href="#" className="text-white">
              Forget Password
            </a>
            <a href="#" className="text-white">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
