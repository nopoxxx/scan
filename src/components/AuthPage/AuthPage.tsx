// @ts-ignore
import classes from "./AuthPage.module.css";
import AuthForm from "../AuthForm/AuthForm";

export default function AuthPage() {
  return (
    <main>
      <section className={classes.auth}>
        <div className={classes.left}>
          <h1 className={classes.title}>
            Для оформления подписки <br />
            на тариф, необходимо <br />
            авторизоваться.
          </h1>
          <img src={require("../../images/Characters.png")} alt="" />
        </div>
        <AuthForm />
      </section>
    </main>
  );
}
