// @ts-ignore
import classes from "./SearchPage.module.css";
import SearchForm from "../SearchForm/SearchForm";

export default function SearchPage() {
  return (
    <div>
      <div className={classes.top}>
        <div className={classes.text}>
          <h1 className={classes.title}>
            Найдите необходимые <br /> данные в пару кликов.
          </h1>
          <h2 className={classes.subtitle}>
            Задайте параметры поиска. <br />
            Чем больше заполните, тем точнее поиск
          </h2>
        </div>
        <div className={classes.images}>
          <img src={require("../../images/Document.png")} />
          <img src={require("../../images/Folders.png")} />
        </div>
      </div>
      <div className={classes.main}>
        <SearchForm />
        <img src={require("../../images/search.png")} />
      </div>
    </div>
  );
}
