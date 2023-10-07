import { Carousel, Typography, Button } from "@material-tailwind/react";
import banner1 from "../../../assets/wp2298428-conference-wallpapers.jpg";
import banner2 from "../../../assets/wp2298459-conference-wallpapers.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Carousel transition={{ duration: 2 }} className="overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src={banner1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                Your Event, Our Expertise
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 md:mb-8 lg:mb-12 opacity-80 text-xs md:text-base lg:text-xl"
              >
                At CONFER, we bring your corporate events to life with our
                unwavering dedication and expertise. Our seasoned professionals
                are committed to making your event vision a reality. With a
                focus on precision, creativity, and flawless execution, we
                transform your ideas into unforgettable corporate experiences.
                Explore our comprehensive range of services, designed to meet
                every aspect of your event needs.
              </Typography>
              <div className="flex justify-center gap-2">
                <Link to={"/services"} className="hidden lg:block">
                  <Button
                    size="lg"
                    className="flex items-center uppercase rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium"
                  >
                    more information
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
                  </Button>
                </Link>
                <Link to={"/services"} className="hidden md:block lg:hidden">
                  <Button
                    size="sm"
                    className="flex items-center uppercase rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium"
                  >
                    more information
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
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl lg:text-5xl"
              >
                Your Success, Our Mission
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 md:mb-8 lg:mb-12 opacity-80 text-xs md:text-base lg:text-xl"
              >
                Your success is our ultimate mission. We&apos;re here to ensure
                that your corporate events not only meet but exceed your goals,
                leaving you with nothing but success stories.
              </Typography>
              <div className="flex gap-2">
                <Link to={"/services"} className="hidden lg:block">
                  <Button
                    size="lg"
                    className="flex items-center uppercase rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium"
                  >
                    more information
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
                  </Button>
                </Link>
                <Link to={"/services"} className="hidden md:block lg:hidden">
                  <Button
                    size="sm"
                    className="flex items-center uppercase rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium"
                  >
                    more information
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
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
