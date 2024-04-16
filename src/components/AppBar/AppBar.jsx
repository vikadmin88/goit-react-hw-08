import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import css from "./AppBar.module.css";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.container}>
            <Navigation/>
            { isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar;
