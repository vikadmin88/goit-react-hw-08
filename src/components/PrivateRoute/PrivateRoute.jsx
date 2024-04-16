import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return !isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
}

export default PrivateRoute;