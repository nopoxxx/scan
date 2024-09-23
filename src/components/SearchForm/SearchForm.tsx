// @ts-ignore
import classes from "./SearchForm.module.css";
import InnInput, { inn } from "../InnInput/InnInput";
import TonalityInput, { tonality } from "../TonalityInput/TonalityInput";
import NumberInput, { number } from "../NumberInput/NumberInput";
import DateInput, { date } from "../DateInput/DateInput";
import Checkboxes, { checkboxesValues } from "../Checkboxes/Checkboxes";
import { useNavigate } from "react-router-dom";

export let searchData: {};

export default function SearchForm() {
  const navigate = useNavigate();

  async function search() {
    if (inn && tonality && number && date) {
      navigate("/result");
      searchData = {
        issueDateInterval: {
          startDate: date[0],
          endDate: date[1],
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                inn: inn,
                maxFullness: checkboxesValues.maxCompleteness,
              },
            ],
            onlyMainRole: checkboxesValues.mainRole,
            tonality: tonality,
            onlyWithRiskFactors: checkboxesValues.riskFactorsOnly,
          },
        },
        attributeFilters: {
          excludeTechNews: !checkboxesValues.includeMarketNews,
          excludeAnnouncements: !checkboxesValues.includeAnnouncements,
          excludeDigests: !checkboxesValues.includeNewsSummaries,
        },
        limit: Number(number),
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["TotalDocuments", "RiskFactors"],
      };
    }
  }

  return (
    <div className={classes.SearchForm}>
      <div className={classes.form}>
        <div className={classes.inputs}>
          <InnInput />
          <TonalityInput />
          <NumberInput />
          <DateInput />
        </div>
        <Checkboxes />
      </div>
      <button onClick={search} className={classes.search}>
        Поиск
      </button>
      <p className={classes.required}>
        <sup>*</sup> Обязательные к заполнению поля
      </p>
    </div>
  );
}
