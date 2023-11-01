import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectToken } from "redux/selectors";


const PublicRoute = ({ children }) => {
    const userIsLoggedIn = useSelector(selectToken);
    const location = useLocation();

    return !userIsLoggedIn ? children : <Navigate to={location.state ?? '/settings'} />;
  };
  
export default PublicRoute;