import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselCard from "../CarouselCard/CarouselCard";
import { whyUsData } from "../../data";
// @ts-ignore
import classes from "./Carousel.module.css";

export default function MultipleItems() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <img src={require("../../images/right.png")} alt=">" />,
    prevArrow: <img src={require("../../images/left.png")} alt="<" />,
  };
  return (
    <div className={classes.carousel}>
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {whyUsData.map((data) => (
            <CarouselCard {...data} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
