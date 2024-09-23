// @ts-ignore
import classes from "./CarouselCard.module.css";
import React from "react";

export default function CarouselCard(props: any) {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.alt} />
      <p className={classes.text}>{props.children}</p>
    </div>
  );
}
