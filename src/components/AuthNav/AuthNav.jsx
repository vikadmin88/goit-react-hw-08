import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {

    return (
        <div className={css.container}>
            <NavLink className={css.btn} to="/register">
                Register
            </NavLink>
            <NavLink className={css.btn} to="/login">
                Log In
            </NavLink>
        </div>
    );
};

export default AuthNav;