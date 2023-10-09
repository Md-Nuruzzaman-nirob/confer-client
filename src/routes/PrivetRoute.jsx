import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import PropTypes from "prop-types";
import { Spinner } from "@material-tailwind/react";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useAuthContext();

  // use location
  const location = useLocation();

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Spinner color="purple" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
