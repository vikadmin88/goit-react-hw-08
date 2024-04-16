import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <ul className={css.list}>
                <li className={css.listItem}>
                    <NavLink to="/" className={buildLinkClass}>
                        Home
                    </NavLink>
                </li>
                {isLoggedIn && (
                    <li>
                        <NavLink to="/contacts" className={buildLinkClass}>
                            Contacts
                        </NavLink>
                    </li>

                )}
            </ul>
        </nav>
    );
};

export default Navigation;