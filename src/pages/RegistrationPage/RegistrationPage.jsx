import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    return (
        <>
            <h1 className={css.title}>Registration</h1>
            <RegisterForm/>
        </>
    )
}

export default RegistrationPage;