// @ts-ignore
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <img src={require("../../images/logo_footer.png")} alt="SCAN" />
        <div className={classes.text}>
          <p>
            г. Москва, Цветной б-р, 40 <br />
            +7 495 771 21 11 <br />
            info@skan.ru
          </p>
          <p className={classes.copyright}>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
}
