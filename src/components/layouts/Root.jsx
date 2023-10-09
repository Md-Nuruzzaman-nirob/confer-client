import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-Poppins ">
      <Toaster></Toaster>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
