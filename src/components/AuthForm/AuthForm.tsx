// @ts-ignore
import classes from "./AuthForm.module.css";
import { LoginViaMethods } from "../../data";
import AuthCard from "../AuthCard/AuthCard";
import { useState } from "react";
import auth from "../../modules/auth";

export default function AuthForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submitIsDisabled, setSubmitIsDisabled] = useState(false);
  const [error, setError] = useState(false);

  function handleLoginChange(e: any) {
    setLogin(e.target.value);
    setSubmitIsDisabled(
      e.target.value.trim().length !== 0 && password.trim().length !== 0,
    );
  }

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
    setSubmitIsDisabled(
      e.target.value.trim().length !== 0 && login.trim().length !== 0,
    );
  }

  async function handleSubmitClick() {
    setError(!(await auth(login, password)));
  }

  return (
    <div className={classes.authForm}>
      <div className={classes.type}>
        <div className={classes.typeSignIn}>Войти</div>
        <div className={classes.typeSignUp}>Зарегистрироваться</div>
      </div>
      <div className={classes.form}>
        <div>
          <p>Логин или номер телефона:</p>
          <input
            type="text"
            className={classes.input}
            value={login}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <p>Пароль:</p>
          <input
            type="password"
            className={classes.input}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <p
          className={classes.error}
          style={!error ? { visibility: "hidden" } : { visibility: "visible" }}
        >
          Неверный логин или пароль
        </p>
        <button
          className={classes.submit}
          type="submit"
          disabled={!submitIsDisabled}
          onClick={handleSubmitClick}
        >
          Войти
        </button>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={classes.forgot}
        >
          Восстановить пароль
        </a>
      </div>
      <div>
        <p className={classes.login_via__title}>Войти через:</p>
        <div className={classes.login_via__list}>
          {LoginViaMethods.map((data) => (
            <AuthCard {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
