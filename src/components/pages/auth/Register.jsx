import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Button } from "@material-tailwind/react";
import useAuthContext from "../../../hooks/useAuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase.config";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiWarningOctagonFill } from "react-icons/pi";

const Register = () => {
  // use state
  const [nameValidation, setNameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [checkboxValidation, setCheckboxValidation] = useState("");

  // context
  const { createUser } = useAuthContext();
  // navigate
  const navigate = useNavigate();
  // use location
  const location = useLocation();

  // name validation
  const handleNameValidation = (e) => {
    const name = e.target.value;
    if (name.length < 4) {
      return setNameValidation("Name should be at least 4 characters");
    } else {
      setNameValidation("");
    }
  };

  // email validation
  const handleEmailValidation = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailValidation("Please enter a valid email address.");
    } else {
      setEmailValidation("");
    }
  };

  // password validation
  const handlePasswordValidation = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      return setPasswordValidation("Password should be at least 6 characters");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/.test(password)
    ) {
      return setPasswordValidation(
        "Password must contain at least one  lowercase letter, one uppercase letter, one digit."
      );
    } else {
      setPasswordValidation("");
    }
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const url = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    const checkbox = form.get("checkbox");
    console.log(form, name, email, password, checkbox);

    setNameValidation("");
    setEmailValidation("");
    setPasswordValidation("");
    setCheckboxValidation("");

    if (!checkbox) {
      return setCheckboxValidation("Please accept terms & conditions");
    }

    createUser(email, password)
      .then(() => {
        // profile update
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {})
          .catch((error) => {
            toast.error(error.message.slice(10));
          });

        //email verification
        sendEmailVerification(auth.currentUser).then(() => {
          toast.success(
            "You successfully create your account. Please check your email for verification.",
            {
              position: "top-center",
              duration: 6000,
            }
          );
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          return setEmailValidation("Email already in use");
        }
        toast.error(error.message.slice(10));
      });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20  mb-32">
      <div>
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-[#e83e8c]  to-[#6610f2] h-16 bg-clip-text text-transparent">
          Begin Your Journey With CONFER - Register Here
        </h1>
      </div>
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none w-[300px] md:w-[420px] mx-5 md:mx-0">
        <SocialLogin></SocialLogin>
        <div className="flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="mx-4">Or, Register with your email</div>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleCreateUser} className="mt-6 mb-2 max-w-screen-lg">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <div className="font-medium ml-6 mb-2">Name</div>
              <input
                onChange={handleNameValidation}
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="text"
                placeholder="Enter name"
                name="name"
                required
              />
              <label
                className="px-2 py-1 text-gray-600 text-xs"
                htmlFor="inputField"
              ></label>
              {nameValidation && (
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                  <span>
                    {" "}
                    <PiWarningOctagonFill></PiWarningOctagonFill>
                  </span>
                  {nameValidation}
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-medium ml-6 mb-2">Photo URL</div>
              <input
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="url"
                placeholder="Enter photo URL"
                name="url"
              />
              <label
                className="px-2 py-1 text-gray-600 text-xs"
                htmlFor="inputField"
              ></label>
            </div>

            <div className="w-full">
              <div className="font-medium ml-6 mb-2">Email</div>
              <input
                onChange={handleEmailValidation}
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              <label
                className=" px-2 py-1 text-gray-600 text-xs "
                htmlFor="inputField"
              ></label>
              {emailValidation && (
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                  <span>
                    {" "}
                    <PiWarningOctagonFill></PiWarningOctagonFill>
                  </span>
                  {emailValidation}
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-medium ml-6 mb-2">Password</div>
              <input
                onChange={handlePasswordValidation}
                className="border border-gray-400 p-2 pl-6 rounded-3xl focus:outline-none focus:border-[#e83e8c] w-full"
                type="password"
                placeholder="Enter password"
                name="password"
                required
              />
              <label
                className=" px-2 py-1 text-gray-600 text-xs "
                htmlFor="inputField"
              ></label>
              {passwordValidation && (
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                  <span>
                    {" "}
                    <PiWarningOctagonFill></PiWarningOctagonFill>
                  </span>
                  {passwordValidation}
                </p>
              )}
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
                name="checkbox"
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
          {checkboxValidation && (
            <p className="ml-1 flex items-center gap-1 text-[#e83e8c] text-sm">
              <span>
                {" "}
                <PiWarningOctagonFill></PiWarningOctagonFill>
              </span>
              {checkboxValidation}
            </p>
          )}
          <Button
            type="submit"
            fullWidth
            className="rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium text-base py-2 mt-3"
          >
            Register
          </Button>
          <p className="mt-4 block text-center text-base font-medium">
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium text-[#e83e8c] transition-colors hover:underline ml-1"
              href="#"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
