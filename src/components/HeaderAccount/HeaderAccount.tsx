import { Link } from "react-router-dom";
// @ts-ignore
import classes from "./HeaderAccount.module.css";
import parseJwt from "../../modules/parseJwt";
import logout from "../../modules/logout";
import expireCheck from "../../modules/expireCheck";
import HeaderAccountInfo from "../HeaderAccountInfo/HeaderAccountInfo";

export default function headerAccount() {
  expireCheck();
  if (!localStorage.getItem("accessToken")) {
    return (
      <div className={classes.account}>
        <a
          className={classes.sign_up}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Зарегистрироваться
        </a>
        <div className={classes.separation}></div>
        <Link className={classes.sign_in} to="/login">
          Войти
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classes.account}>
        <HeaderAccountInfo />
        <div className={classes.text}>
          <p className={classes.username}>
            {parseJwt(localStorage.getItem("accessToken")).aud}
          </p>
          <a href="" className={classes.logout} onClick={logout}>
            Выйти
          </a>
        </div>
        <img
          className={classes.avatar}
          src={require("../../images/avatar.png")}
          alt="avatar"
        />
      </div>
    );
  }
}
