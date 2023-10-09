import { useLoaderData } from "react-router-dom";
import Banner from "../../common/header/Banner";
import News from "./News";
import Sponsors from "./Sponsors";
import useAuthContext from "../../../hooks/useAuthContext";
import { Spinner } from "@material-tailwind/react";
import ServicePart from "./ServicePart";

const Home = () => {
  const newsData = useLoaderData();
  const { loader } = useAuthContext();
  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Spinner color="purple" />
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <ServicePart></ServicePart>
      <Sponsors></Sponsors>
      <News newsData={newsData}></News>
    </div>
  );
};

export default Home;
