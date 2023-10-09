import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl text-[#e83e8c] font-bold mb-4">404</h1>
        <h2 className="text-3xl text-gray-800 mb-2 font-semibold">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-4 mx-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600 mx-8">
          But don&apos;t worry! You can go back to the homepage or try searching
          for what you&apos;re looking for.
        </p>
        <Link to={"/"}>
          <Button className="rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-semibold my-5">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
