import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {Navigate} from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
}

export default RestrictedRoute;