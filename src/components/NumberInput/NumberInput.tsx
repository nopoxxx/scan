// @ts-ignore
import classes from "./NumberInput.module.css";
import { useState } from "react";

export let number = 1;
export let numError = false;

export default function NumberInput() {
  const [value, setValue] = useState(1);
  const [error, setError] = useState(false);
  function handlerInputChange(e: any) {
    setValue(e.target.value);
    setError(e.target.value > 1000 || e.target.value < 1);
    numError = e.target.value > 1000 || e.target.value < 1;
    number = e.target.value;
  }
  return (
    <label className={classes.form}>
      Количество документов в выдаче
      <input
        placeholder="От 1 до 1000"
        type="number"
        max="1000"
        min="1"
        value={value}
        onChange={handlerInputChange}
        className={!error ? classes.input : classes.inputError}
      />
    </label>
  );
}
