import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../../assets/logo.webp";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 uppercase font-medium">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#e83e8c] font-semibold underline"
            : "text-white hover:text-[#e83e8c] hover:underline"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#e83e8c] font-semibold underline"
            : "text-white hover:text-[#e83e8c] hover:underline"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#e83e8c] font-semibold underline"
            : "text-white hover:text-[#e83e8c] hover:underline"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#e83e8c] font-semibold underline"
            : "text-white hover:text-[#e83e8c] hover:underline"
        }
      >
        Contact
      </NavLink>
    </ul>
  );

  return (
    <div className="bg-[#111344]">
      <div className="h-max rounded-none py-2 px-4 max-w-7xl mx-auto opacity-none border-none">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="flex-1 mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="" />
          </Typography>
          <div className="flex-1 flex items-center justify-between gap-4 py-5">
            <div className="hidden lg:block">{navList}</div>
            <Link to={"/login"}>
              {" "}
              <Button
                size="md"
                className="hidden lg:inline-block bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins text-sm font-semibold px-6 py-2 rounded-3xl"
              >
                <span>Log in</span>
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link to={"/login"}>
            <Button
              variant="gradient"
              size="md"
              fullWidth
              className="mb-2 bg-gradient-to-b from-[#e83e8c] to-[#6610f2] font-Poppins text-sm font-medium py-2 rounded-3xl mt-3"
            >
              <span>Log in</span>
            </Button>
          </Link>
        </MobileNav>
      </div>
    </div>
  );
};

export default NavBar;
