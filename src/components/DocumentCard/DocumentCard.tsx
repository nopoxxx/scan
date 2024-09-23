// @ts-ignore
import classes from "./DocumentCard.module.css";
import { formatDate } from "../../modules/histogramsSorter";

export default function DocumentCard(props: any) {
  const formatContent = (xmlContent: string) => {
    const cleanContent = xmlContent
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/<\/?p>/g, "");

    return cleanContent;
  };

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.top}>
          <p>{formatDate(props.date)}</p>
          <p className={classes.sourceName}>{props.sourceName}</p>
        </div>

        <a className={classes.title} href={props.url}>
          {props.title}
        </a>
        <div className={classes.tags}>
          {props.isTechNews ? (
            <p className={classes.tech}>Технические новости</p>
          ) : null}
          {props.isAnnouncement ? (
            <p className={classes.announs}>Анонс и события</p>
          ) : null}
          {props.isDigest ? (
            <p className={classes.digest}>Сводки новостей</p>
          ) : null}
        </div>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: formatContent(props.content) }}
        />
      </div>
      <div className={classes.bottom}>
        <a className={classes.button} href={props.url}>
          Читать в источнике
        </a>
        <p className={classes.wordCount}>{props.wordCount} слов</p>
      </div>
    </div>
  );
}
