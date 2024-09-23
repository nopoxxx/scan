import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// @ts-ignore
import { useNavigate } from "react-router-dom";
import { histogramsSorter } from "../../modules/histogramsSorter";
import HistogramCell from "../HistogramCell/HistogramCell";
import { searchData } from "../SearchForm/SearchForm";
import classes from "./HistogramsSection.module.css";

export default function HistogramsSection() {
  // @ts-ignore
  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const [loading, setLoading] = useState(true);
  const [histograms, setHistograms] = useState<any[]>([]);
  const navigate = useNavigate();

  async function getHistogramsResponse(): Promise<void> {
    await fetch(
      "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(searchData),
        credentials: "omit",
      }
    )
      .then(async (r) => {
        const histogramsJson = await r.json();
        setHistograms(await histogramsJson.data);
      })
      .catch(() => console.log("error"))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getHistogramsResponse();
    if (!searchData) {
      navigate("/search");
    }
  }, []);

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Общая сводка</h1>
      <h2 className={classes.subtitle}>
        Найдено {loading ? "Loading" : histogramsSorter(histograms).length}{" "}
        вариантов
      </h2>
      <div className={classes.histograms}>
        <img
          className={classes.arrow}
          onClick={previous}
          src={require("../../images/left.png")}
        />
        <div className={classes.fixed}>
          <p className={classes.text}>Период</p>
          <p className={classes.text}>Всего</p>
          <p className={classes.text}>Риски</p>
        </div>
        <div className={classes.slider}>
          {loading ? (
            <div className={classes.loading}>
              <img
                className={classes.loadingImg}
                src={require("../../images/loading.png")}
                alt=""
              />
              <p>Загружаем данные </p>
            </div>
          ) : (
            <Slider
              ref={(slider: any) => {
                sliderRef.current = slider;
              }}
              {...settings}
            >
              {histogramsSorter(histograms).map((data) => (
                <HistogramCell {...data} />
              ))}
            </Slider>
          )}
        </div>
        <img
          className={classes.arrow}
          onClick={next}
          src={require("../../images/right.png")}
        />
      </div>
    </section>
  );
}
