// @ts-ignore
import classes from "./InnInput.module.css";
import { checkINN } from "ru-validation-codes";
import { useState } from "react";

export let inn = "";
export let innError = true;

export default function InnInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  function handlerInputChange(e: any) {
    setValue(e.target.value);
    setError(!checkINN(e.target.value));
    innError = !checkINN(e.target.value);
    inn = e.target.value;
  }
  return (
    <label className={classes.form}>
      ИНН компании
      <input
        type="number"
        placeholder="10 цифр"
        onChange={handlerInputChange}
        onPaste={handlerInputChange}
        value={value}
        className={!error ? classes.input : classes.inputError}
      />
    </label>
  );
}
