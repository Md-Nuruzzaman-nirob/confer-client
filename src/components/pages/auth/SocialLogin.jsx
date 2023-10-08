import { Button } from "@material-tailwind/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex items-center justify-between gap-5 mb-5">
      <Button className="flex items-center gap-3 uppercase rounded-3xl bg-blue-600 text-white font-Poppins font-medium">
        <FaGoogle></FaGoogle>
        Sign in with Google
      </Button>
      <Button className="flex items-center gap-3 uppercase rounded-3xl text-white bg-black font-Poppins font-medium">
        <FaGithub></FaGithub>
        Sign in with Github
      </Button>
    </div>
  );
};

export default SocialLogin;
