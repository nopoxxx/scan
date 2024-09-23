import { Link } from "react-router-dom";
// @ts-ignore
import classes from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={classes.section}>
      <div className={classes.info}>
        <h1 className={classes.title}>
          сервис по поиску <br />
          публикаций <br />
          о компании <br />
          по его ИНН
        </h1>
        <h2 className={classes.subtitle}>
          Комплексный анализ публикаций, получение данных <br />в формате PDF на
          электронную почту.
        </h2>
        <Link className={classes.button} to="/search">
          Запросить данные
        </Link>
      </div>
      <img src={require("../../images/InfoSection.png")} alt="Main" />
    </section>
  );
}
