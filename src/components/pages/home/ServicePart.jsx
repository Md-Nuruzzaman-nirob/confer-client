import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicePart = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div className="max-w-7xl mx-5 xl:mx-auto text-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-20 mb-3 lg:mb-5 uppercase text-[#e83e8c]">
        Our Comprehensive Services
      </h1>
      <p className="text-xs md:text-sm lg:text-base opacity-80 md:w-2/3 mx-auto uppercase">
        Explore our range of expert services designed to elevate your corporate
        events. From event planning to entertainment, we have you covered.
        Discover the perfect solution for your next gathering.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mx-auto mt-6 mb-10">
        {serviceData.slice(0, 3).map((serviceCard) => (
          <Card key={serviceCard.ID} className="mt-8 text-start">
            <CardBody className="p-0">
              <img
                className="w-full h-[225px] xl:h-[280px] rounded-t-xl"
                src={serviceCard.Image}
                alt=""
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-5 font-Poppins text-xl xl:text-2xl h-16 mx-5"
              >
                {serviceCard.ServiceName}
              </Typography>
              <Typography className="text-justify lg:text-sm xl:text-base font-Poppins mx-5">
                {serviceCard.Description}
              </Typography>
            </CardBody>
            <CardFooter className="px-4 pt-3 flex items-center justify-between">
              <h3 className="">{serviceCard.Price}</h3>
              <Link to={`/services/${serviceCard.ID}`} className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium text-white"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Link to={"/services"} className="flex justify-center items-center mb-20">
        <Button className="rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium text-base">
          <span className="inline-flex items-center gap-2">
            more services
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default ServicePart;
