import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const PrivateRoute = () =>{
    const auth = useAuth();
    console.log(auth);
    return(
        auth ? <Outlet /> : <Navigate to="login" />
    )
}

export default PrivateRoute;