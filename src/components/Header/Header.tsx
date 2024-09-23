// @ts-ignore
import classes from "./Header.module.css";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={require("../../images/logo.png")} alt="SCAN" />
      <nav className={classes.nav}>
        <Link to="/">Главная</Link>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Тарифы</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">FAQ</a>
      </nav>
      <HeaderAccount />
    </header>
  );
}
