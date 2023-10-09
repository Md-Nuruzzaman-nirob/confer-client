import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import NavBar from "../../common/header/NavBar";
import Footer from "../../common/footer/Footer";

const Services = () => {
  const servicesData = useLoaderData();

  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-5 xl:mx-auto text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-3xl lg:text-4xl font-bold mt-8 lg:mt-16 mb-3 lg:mb-5"
        >
          Our Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-xs md:text-sm lg:text-base opacity-80 w-11/12 md:w-5/6 lg:w-2/3 mx-auto"
        >
          Explore our range of expert services designed to elevate your
          corporate events. From event planning to entertainment, we have you
          covered. Discover the perfect solution for your next gathering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mx-auto mb-20">
          {servicesData.map((serviceCard) => (
            <ServicesCard
              key={serviceCard.ID}
              serviceCard={serviceCard}
            ></ServicesCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
