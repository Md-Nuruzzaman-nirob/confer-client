import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Button } from "@material-tailwind/react";

const SignUp = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <SocialLogin></SocialLogin>
        <div className="flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="mx-4">Or, Sign Up with your email</div>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <form className="mt-8 mb-2 max-w-screen-lg">
          <div className="mb-4 flex flex-col gap-6">
            <div className="w-full">
              <input
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="text"
                placeholder="Your name"
                required
              />
              <label
                className="px-2 py-1 text-gray-600 text-xs"
                htmlFor="inputField"
              ></label>
            </div>

            <div className="w-full">
              <input
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="email"
                placeholder="Your email"
                required
              />
              <label
                className=" px-2 py-1 text-gray-600 text-xs "
                htmlFor="inputField"
              ></label>
            </div>

            <div className="w-full">
              <input
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="password"
                placeholder="Your password"
                name="password"
                required
              />
              <label
                className=" px-2 py-1 text-gray-600 text-xs "
                htmlFor="inputField"
              ></label>
            </div>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-3xl border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#e83e8c] checked:bg-[#e83e8c] checked:before:bg-[#e83e8c] hover:before:opacity-10"
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              htmlFor="checkbox"
            >
              <p className="flex items-center text-sm">
                I agree the
                <a
                  className="font-medium transition-colors text-[#e83e8c] hover:underline ml-1"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <Button
            type="submit"
            fullWidth
            className="rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium text-base py-2 mt-3"
          >
            Sign Up
          </Button>
          <p className="mt-4 block text-center text-base font-medium">
            Already have an account?
            <Link
              to={"/signin"}
              className="font-medium text-[#e83e8c] transition-colors hover:underline ml-1"
              href="#"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
