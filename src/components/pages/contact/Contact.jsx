import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";
import NavBar from "../../common/header/NavBar";
import Footer from "../../common/footer/Footer";
import { useState } from "react";
import { PiWarningOctagonFill } from "react-icons/pi";

const Contact = () => {
  const [emailValidation, setEmailValidation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    // const phone = form.get("phone");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return setEmailValidation("Please enter a valid email address.");
    }
    setEmailValidation("");

    toast.success("Your message sent successfully.", {
      position: "top-center",
      duration: 4000,
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <NavBar></NavBar>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex justify-center items-center my-24 md:my-36 lg:my-48 xl:my-56 max-w-7xl mx-5 xl:mx-auto"
      >
        <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-xl rounded-t-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-600 mb-2 ml-4"
                  >
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
                  <label
                    htmlFor="last_name"
                    className="block text-gray-600 mb-2 ml-4"
                  >
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
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-600 mb-2 ml-4"
                  >
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
                  {emailValidation && (
                    <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
                      <span>
                        {" "}
                        <PiWarningOctagonFill></PiWarningOctagonFill>
                      </span>
                      {emailValidation}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 mb-2 ml-4"
                  >
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
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-600 mb-2 ml-4"
                >
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
                className="flex select-none items-center gap-2 rounded-3xl py-3 px-6 text-center align-middle font-Poppins text-xs font-semibold uppercase bg-gradient-to-b from-[#e83e8c] to-[#6610f2]"
                type="submit"
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
      <Footer></Footer>
    </>
  );
};

export default Contact;
