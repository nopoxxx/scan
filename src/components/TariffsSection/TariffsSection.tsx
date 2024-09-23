// @ts-ignore
import classes from "./TariffsSection.module.css";
import { tarrifsData } from "../../data";
import TariffCard from "../TariffCard/TariffCard";

export default function TariffsSection() {
  return (
    <section className="tariffs">
      <p className={classes.title}>наши тарифы</p>
      <div className={classes.list}>
        {tarrifsData.map((data) => (
          <TariffCard {...data} />
        ))}
      </div>
    </section>
  );
}
