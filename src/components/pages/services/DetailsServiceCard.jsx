import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Footer from "../../common/footer/Footer";
import NavBar from "../../common/header/NavBar";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsServiceCard = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleCard = data?.find((card) => card.ID == id);

  return (
    <div>
      <NavBar></NavBar>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex justify-center items-center my-24 md:my-36 lg:my-48 xl:my-56 max-w-7xl mx-5 xl:mx-auto"
      >
        {" "}
        <Card className="flex-col md:flex-row lg:gap-5">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 lg:w-5/6 rounded-none md:rounded-xl rounded-t-xl md:rounded-r-none"
          >
            <img
              src={singleCard?.Image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-start p-4 lg:pr-8">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-3 md:my-3 text-lg md:text-xl lg:text-2xl font-Poppins"
            >
              {singleCard?.ServiceName}
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              className="mb-4 font-Poppins text-sm lg:text-base"
            >
              {singleCard?.Description}
            </Typography>
            <div className="w-full flex justify-start md:justify-between items-center flex-wrap text-xs md:text-sm lg:text-base mb-5">
              <p>#{singleCard?.Features[0]}</p>
              <p>#{singleCard?.Features[1]}</p>
              <p>#{singleCard?.Features[2]}</p>
            </div>
            <div className="w-full flex justify-between items-center text-sm md:text-base font-semibold">
              <div className="flex flex-col justify-start ">
                <p className="mb-2">{singleCard?.Availability}</p>
                <p>{singleCard?.Duration}</p>
              </div>
              <p>{singleCard?.Price}</p>
            </div>
          </CardBody>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailsServiceCard;
