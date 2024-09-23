//@ts-ignore
import classes from "./HistogramCell.module.css";

export default function HistogramCell(props: any) {
  return (
    <div className={classes.cell}>
      <p>{props.date}</p>
      <p>{props.total}</p>
      <p>{props.risks}</p>
    </div>
  );
}
