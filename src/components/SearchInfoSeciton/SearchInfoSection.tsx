// @ts-ignore
import classes from "./SearchInfoSection.module.css";

export default function SearchInfoSection() {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <h1 className={classes.title}>
          Ищем. Скоро <br /> будут результаты
        </h1>
        <h2 className={classes.subtitle}>
          Поиск может занять некоторое время, <br /> просим сохранять терпение.
        </h2>
      </div>
      <img src={require("../../images/SearchInfoSection.png")} alt={"Ищем"} />
    </section>
  );
}
