// @ts-ignore
import classes from "./DateInput.module.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./DateRangePicker.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export let date: Array<Date>;

export default function DateInput() {
  const [value, setValue] = useState<Value>([new Date(), new Date()]);

  function handlerInputChange(e: any) {
    setValue(e);
    date = e;
  }

  return (
    <label className={classes.field}>
      <p className={classes.text}>Диапазон поиска</p>
      <DateRangePicker
        closeCalendar={false}
        clearIcon={null}
        calendarIcon={null}
        onChange={handlerInputChange}
        value={value}
        maxDate={new Date()}
      />
    </label>
  );
}
