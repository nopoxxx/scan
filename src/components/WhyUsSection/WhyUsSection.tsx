// @ts-ignore
import classes from "./WhyUsSection.module.css";
import Carousel from "../Carousel/Carousel";

export default function WhyUsSection() {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Почему именно мы</h1>
      <Carousel />
      <img
        className={classes.image}
        src={require("../../images/why_us_image.png")}
        alt="Why Us"
      />
    </section>
  );
}
