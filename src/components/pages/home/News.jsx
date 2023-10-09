import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const News = ({ newsData }) => {
  return (
    <div className="max-w-7xl mx-5 xl:mx-auto ">
      <h4 className="text-[#e83e8c] text-center pt-16 pb-2">OUR BLOG</h4>
      <h1 className="text-black text-xl md:text-3xl text-center font-semibold">
        LATEST NEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mx-auto mt-20 mb-14">
        {newsData?.slice(0, 3).map((news) => (
          <div
            key={news.id}
            className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img
                className="rounded-t-xl"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="ui/ux review check"
              />
            </div>
            <div className="p-4">
              <h4 className="block lg:text-lg font-semibold text-black">
                {news.Title}
              </h4>
              <p className="mt-3 mb-2 text-sm lg:text-base">
                {news.Description}
              </p>
              <p>
                <small className="text-black font-medium">
                  {news.Location}
                </small>
              </p>
            </div>

            <div className="flex items-center justify-between px-4 mb-6">
              <p>{news.Time}</p>
              <p className="block text-base font-normal leading-relaxed text-inherit antialiased">
                {news.Date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/blogs"} className="flex justify-center items-center mb-20">
        <Button className="rounded-3xl bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins font-medium text-base">
          <span className="inline-flex items-center gap-2">
            more blogs
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

News.propTypes = {
  newsData: PropTypes.object.isRequired,
};

export default News;
