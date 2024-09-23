// @ts-ignore
import classes from "./Checkboxes.module.css";

export const checkboxesValues = {
  maxCompleteness: false,
  businessMentions: false,
  mainRole: false,
  riskFactorsOnly: false,
  includeMarketNews: false,
  includeAnnouncements: false,
  includeNewsSummaries: false,
};

export default function Checkboxes() {
  function handlerChangeMaxCompleteness(e: any) {
    checkboxesValues.maxCompleteness = e.target.value;
  }

  function handlerChangeBusinessMentions(e: any) {
    checkboxesValues.businessMentions = e.target.value;
  }

  function handlerChangeMainRole(e: any) {
    checkboxesValues.mainRole = e.target.value;
  }

  function handlerChangeRiskFactorsOnly(e: any) {
    checkboxesValues.riskFactorsOnly = e.target.value;
  }

  function handlerChangeIncludeMarketNews(e: any) {
    checkboxesValues.includeMarketNews = e.target.value;
  }

  function handlerChangeIncludeAnnouncements(e: any) {
    checkboxesValues.includeAnnouncements = e.target.value;
  }

  function handlerChangeIncludeNewsSummaries(e: any) {
    checkboxesValues.includeNewsSummaries = e.target.value;
  }

  return (
    <div className={classes.checkboxes}>
      <label className={classes.label}>
        <input
          onChange={handlerChangeMaxCompleteness}
          type="checkbox"
          className={classes.checkbox}
        />
        Признак максимальной полноты
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeBusinessMentions}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Упоминания в бизнес-контексте
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeMainRole}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Главная роль в публикации
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeRiskFactorsOnly}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Публикации только с риск-факторами
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeIncludeMarketNews}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Включать технические новости рынков
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeIncludeAnnouncements}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Включать анонсы и календари
      </label>
      <label className={classes.label}>
        <input
          onChange={handlerChangeIncludeNewsSummaries}
          type="checkbox"
          className={classes.checkbox}
        />{" "}
        Включать сводки новостей
      </label>
    </div>
  );
}
