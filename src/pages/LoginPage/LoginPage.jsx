import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
    return (
        <>
            <h1 className={css.title}>Log In</h1>
            <LoginForm/>
        </>
    )
}

export default LoginPage;