import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="bg-indigo-900">
      <h4
        className="text-[#e83e8c] text-center pt-28 pb-2 uppercase"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        have question?
      </h4>
      <h1
        className="text-white text-3xl text-center font-semibold uppercase"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        contact us
      </h1>
      <div className="flex justify-center items-center pt-10 pb-24 md:pb-28 lg:pb-36 xl:pb-48 max-w-7xl mx-5 xl:mx-auto">
        <div className="relative flex w-full flex-col-reverse md:flex-row gap-12 md:gap-0 text-white">
          <div className="flex flex-col items-start justify-center  m-0 md:w-2/5 space-y-10 pl-7 md:pl-16">
            <div data-aos="fade-up" data-aos-duration="1500">
              <p className="opacity-80">Address:</p>
              <h3 className="font-semibold">Dhaka-1204 Bangladesh</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <p className="opacity-80">Phone:</p>
              <h3 className="font-semibold hover:underline">+8801919191991</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <p className="opacity-80">Email:</p>
              <h3 className="font-semibold">nmd28573@gmail.com</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <p className="opacity-80">Website:</p>
              <Link
                target="_blank"
                to={"https://confer-42442.web.app"}
                className="font-semibold hover:underline"
              >
                https://confer-42442.web.app
              </Link>
            </div>
          </div>
          <div
            className="flex-1 p-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <form className="w-full">
              <div
                className="grid grid-cols-2 gap-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div>
                  <label htmlFor="first_name" className="block mb-2 ml-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="w-full px-4 py-2 border focus:outline-none focus:border-[#e83e8c] rounded-3xl text-xs md:text-sm"
                    placeholder="Enter first Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-2 ml-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:border-[#e83e8c] text-xs md:text-sm"
                    placeholder="Enter last Name"
                    required
                  />
                </div>
              </div>
              <div
                className="grid grid-cols-2 gap-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div>
                  <label htmlFor="email" className="block mb-2 ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:border-[#e83e8c] text-xs md:text-sm"
                    placeholder="Enter email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 ml-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-3xl focus:outline-none focus:border-[#e83e8c] text-xs md:text-sm"
                    placeholder="Enter phone Number"
                    required
                  />
                </div>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-duration="1500">
                <label htmlFor="message" className="block mb-2 ml-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:border-[#e83e8c] text-xs md:text-sm"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <Button
                // onClick={() =>
                //   toast.success("Your message sent successfully.", {
                //     position: "top-center",
                //     duration: 4000,
                //   })
                // }
                className="flex select-none items-center gap-2 rounded-3xl py-3 px-6 text-center align-middle font-Poppins text-xs uppercase font-semibold bg-[#e83e8c] text-white"
                type="button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                send message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
