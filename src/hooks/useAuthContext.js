import {
    useContext
} from "react";
import {
    AuthContext
} from "../context/AuthProvider";


const useAuthContext = () => {
    const allContext = useContext(AuthContext)
    return allContext
};


export default useAuthContext;