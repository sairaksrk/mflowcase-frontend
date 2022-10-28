import React from "react";
// import pic from "../assets/img/konklom.png";
import logo from "../../assets/img/Logokk.png";

function Login() {
  return (
    <div className="h-screen flex">
      <div className="w-full lg:w-1/2 justify-around items-center bg-white my-auto hidden lg:flex">
        <div className="w-72 hover:w-80">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 justify-center items-center bg-cyan-700">
        <form className="bg-white p-10 sm:p-36 lg:p-16 rounded-lg  lg:mb-0 sm:mb-42">
          <h1 className="text-gray-800 font-bold text-2xl mb-7  text-center">
            เข้าสู่ระบบ
          </h1>
          {/* <p className="text-sm font-normaltext-gray-800 mb-7 ">Welcome Back</p> */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="text"
              name
              id
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="password"
              name
              id
              placeholder="Password"
            />
          </div>

          {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name
              id
              placeholder="Confirm password"
            />
          </div> */}

          <button
            type="submit"
            className="block w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300   mt-6 py-4 rounded-2xl font-semibold mb-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
