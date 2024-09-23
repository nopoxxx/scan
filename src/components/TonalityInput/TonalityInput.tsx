// @ts-ignore
import classes from "./TonalityInput.module.css";
import { useState } from "react";

export let tonality: string;

export default function TonalityInput() {
  const [value, setValue] = useState("");

  switch (value) {
    case "Любая":
      tonality = "any";
      break;
    case "Позитивная":
      tonality = "positive";
      break;
    case "Негативная":
      tonality = "negative";
      break;
    default:
      tonality = "any";
  }

  return (
    <label className={classes.form}>
      Тональность
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
      >
        <option>Любая</option>
        <option>Позитивная</option>
        <option>Негативная</option>
      </select>
    </label>
  );
}
