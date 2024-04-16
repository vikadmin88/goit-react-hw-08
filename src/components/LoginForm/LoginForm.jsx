import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from './LoginForm.module.css'
import {apiLogIn} from "../../redux/auth/operations.js";


const LoginForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .required("Required"),
    password: Yup.string()
      .required("Required")
  });

  const handleSubmit = (values, actions) => {
    dispatch(apiLogIn({
      email: values.email.trim(),
      password: values.password.trim()
    }));
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>Email
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage className={css.errorMessage} name="email" component="span" />
          </label>
          <label className={css.label}>Password
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage className={css.errorMessage} name="password" component="span" />
          </label>
          <button className={css.btn} type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm;