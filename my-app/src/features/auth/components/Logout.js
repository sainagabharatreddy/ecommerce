import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectedLoggedInUser, signOutAsync } from "../Authslice";
import { Navigate } from "react-router-dom";


function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectedLoggedInUser)

    useEffect(()=>{
        dispatch(signOutAsync())
    })

    
    return ( 
        <>
        {!user && <Navigate to='/login' replace={true}></Navigate>}
        </>
     );
}

export default Logout;