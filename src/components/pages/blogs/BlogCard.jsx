import PropTypes from "prop-types";

const BlogCard = ({ newsCard }) => {
  const { Image, Title, Description, Date, Time, Location } = newsCard || {};

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8"
    >
      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none w-full  h-[225px] xl:h-[280px] rounded-t-xl">
        <img
          className="w-full  h-[225px] xl:h-[280px] rounded-t-xl"
          src={Image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h4 className="block lg:text-lg font-semibold text-black">{Title}</h4>
        <p className="mt-3 mb-2 text-sm xl:text-base">{Description}</p>
        <p>
          <small className="text-black font-medium">{Location}</small>
        </p>

        <div className="flex items-center justify-between mt-3 mb-2">
          <p>{Time}</p>
          <p className="block text-base font-normal leading-relaxed text-inherit antialiased">
            {Date}
          </p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  newsCard: PropTypes.object.isRequired,
};
export default BlogCard;
