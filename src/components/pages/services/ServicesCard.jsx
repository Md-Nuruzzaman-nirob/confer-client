import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ServicesCard = ({ serviceCard }) => {
  console.log(serviceCard);
  const { ID, Image, ServiceName, Price, Description } = serviceCard || {};

  return (
    <Card className="mt-8 text-start">
      <CardBody className="p-0">
        <img
          className="w-full h-[225px] xl:h-[280px] rounded-md"
          src={Image}
          alt=""
        />
        <Typography
          variant="h5"
          color="blue-gray"
          className="mt-5 font-Poppins text-xl xl:text-2xl h-16 mx-5"
        >
          {ServiceName}
        </Typography>
        <Typography className="text-justify lg:text-sm xl:text-base font-Poppins mx-5">
          {Description}
        </Typography>
      </CardBody>
      <CardFooter className="px-4 pt-3 flex items-center justify-between">
        <h3 className="">{Price}</h3>
        <Link to={`/services/${ID}`} className="inline-block">
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
  );
};
ServicesCard.propTypes = {
  serviceCard: PropTypes.object.isRequired,
};

export default ServicesCard;
