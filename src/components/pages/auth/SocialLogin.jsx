import { Button } from "@material-tailwind/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuthContext from "../../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignin, githubSignin } = useAuthContext();

  // navigate
  const navigate = useNavigate();
  // use location
  const location = useLocation();

  const handleSocialLogin = (social) => {
    social()
      .then(() => {
        toast.success("Login successfully.", {
          position: "top-center",
          duration: 4000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
      });
  };

  return (
    <div className="flex items-center justify-between gap-5 mb-5">
      <Button
        onClick={() => handleSocialLogin(googleSignin)}
        className="flex items-center gap-3 uppercase rounded-3xl bg-blue-600 text-white font-Poppins font-medium"
      >
        <FaGoogle></FaGoogle>
        <span className="hidden md:flex -mr-2">Login with</span>Google
      </Button>
      <Button
        onClick={() => handleSocialLogin(githubSignin)}
        className="flex items-center gap-3 uppercase rounded-3xl text-white bg-black font-Poppins font-medium"
      >
        <FaGithub></FaGithub>
        <span className="hidden md:flex -mr-2">Login with</span>Github
      </Button>
    </div>
  );
};

export default SocialLogin;
