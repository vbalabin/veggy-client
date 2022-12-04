import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import { AuthDispatchContext, signIn } from "contexts/auth";
import Input from "components/core/form-controls/Input";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Поле Пароль не заполнено!"),
  username: Yup.string().required("Поле Логин не заполнено!")
});

const AuthPage = () => {
  const authDispatch = useContext(AuthDispatchContext);
  const history = useHistory();
  const location = useLocation();
  const fromUrl = _get(location, "state.from.pathname");
  console.log("location => ", location);
  const goToForgotPassword = (e) => {
    e.preventDefault();
  };

  const goToRegister = (e) => {
    e.preventDefault();
  };

  const signInSuccess = (userData) => {
    signIn(authDispatch, userData);
    if (fromUrl) {
      history.push(fromUrl);
    } else {
      history.push("/");
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userData = { ...values };
          resetForm();
          signInSuccess(userData);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {() => (
        <Form>
          <Field
            name="username"
            type="text"
            placeholder="Номер телефона или Почтовый адрес"
            component={Input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Пароль"
            component={Input}
          />

          <p>
            <a href="/#" onClick={goToForgotPassword}>
              Забыли пароль?
            </a>
          </p>
          <button className="auth-button block" onClick={() => {}}>
            Войти
          </button>

          <p>
            Впервые у нас?{" "}
            <a href="/#" onClick={goToRegister}>
              Регистрация!
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default AuthPage;
