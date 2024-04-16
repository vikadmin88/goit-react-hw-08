import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from './RegisterForm.module.css'
import {apiRegister} from "../../redux/auth/operations.js";


const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email()
        .required("Required"),
    password: Yup.string()
        .min(7, "Too Short! Min 7 symbols.")
        .required("Required")
  });

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister({
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim()
    }));
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>Name
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" component="span" />
          </label>
          <label className={css.label}>Email
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage className={css.errorMessage} name="email" component="span" />
          </label>
          <label className={css.label}>Password
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage className={css.errorMessage} name="password" component="span" />
          </label>
          <button className={css.btn} type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm;