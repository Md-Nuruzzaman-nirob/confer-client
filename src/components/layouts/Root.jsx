import { Outlet } from "react-router-dom";
import NavBar from "../common/header/NavBar";
import Footer from "../common/footer/Footer";

const Root = () => {
  return (
    <div className="font-Poppins ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
