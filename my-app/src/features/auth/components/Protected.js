import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { selectedLoggedInUser } from "../Authslice";

function Protected({children}) {
    const user = useSelector(selectedLoggedInUser)

    if(!user){
        return <Navigate to = '/login' replace={true}></Navigate>
    }
    return (children);
}

export default Protected;