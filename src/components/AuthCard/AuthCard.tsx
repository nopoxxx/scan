// @ts-ignore
import classes from "./AuthCard.module.css";

export default function AuthCard(props: any) {
  return (
    <a className={classes.card} href={props.link}>
      <img src={props.image} alt={props.name} />
    </a>
  );
}
