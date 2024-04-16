import {useSelector} from "react-redux";
import {selectIsLoggedIn, selectIsRefreshing} from "../../redux/auth/selectors.js";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/login" } ) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} replace /> : children;
}

export default PrivateRoute;