// @ts-ignore
import classes from "./TariffCard.module.css";

export default function TariffCard(props: any) {
  return (
    <div className={classes.card}>
      <div className={classes.top} style={{ backgroundColor: props.color }}>
        <div className={props.dark ? classes.dark : null}>
          <p className={classes.title}>{props.children}</p>
          <p className={classes.subtitle}>{props.subtitle}</p>
        </div>
        <img src={props.image} alt="" />
      </div>
      <p className={classes.price}>
        {props.price + "₽ "}
        <s className={classes.fullprice}>{props.fullprice + "₽"}</s>
      </p>
      <p className={classes.installments}>
        {props.installments != null
          ? `или ${props.installments} ₽/мес. при рассрочке на 24 мес.`
          : "ㅤ"}
      </p>
      <p className={classes.info_title}>В тариф входит:</p>
      <ul className={classes.info_list}>
        {props.advantages.map((data: string) => (
          <li>{data}</li>
        ))}
      </ul>
      <a className={classes.button} href="#">
        Подробнее
      </a>
    </div>
  );
}
