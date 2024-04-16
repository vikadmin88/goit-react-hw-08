import {useDispatch, useSelector} from "react-redux";
import { apiLogOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import {selectUser} from "../../redux/auth/selectors.js";
import {resetState} from "../../utils/utils.js";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const logOutHandler = () => {
        dispatch(apiLogOut());
        dispatch(resetState());
    }
    return (
        <div className={css.container}>
            <span className={css.message}>Hello, {user.name}</span>
            <button className={css.btn} type="button" onClick={logOutHandler}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;