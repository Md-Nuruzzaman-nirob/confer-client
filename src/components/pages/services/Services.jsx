import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  //loader
  const servicesData = useLoaderData();

  return (
    <div className="max-w-7xl mx-5 xl:mx-auto text-center">
      <h1 className="text-xl md:text-3xl font-semibold mt-8 lg:mt-10 mb-3 lg:mb-5">
        Our Comprehensive Services
      </h1>
      <p className="text-xs md:text-sm lg:text-base opacity-80 w-2/3 mx-auto">
        Explore our range of expert services designed to elevate your corporate
        events. From event planning to entertainment, we have you covered.
        Discover the perfect solution for your next gathering.
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
  );
};

export default Services;
