import { Outlet } from "react-router-dom";
import NavBar from "../common/header/NavBar";
import Footer from "../common/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-Poppins ">
      <NavBar></NavBar>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
