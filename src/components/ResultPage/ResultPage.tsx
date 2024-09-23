// @ts-ignore
import classes from "./ResultPage.module.css";
import SearchInfoSection from "../SearchInfoSeciton/SearchInfoSection";
import HistogramsSection from "../HistogramsSection/HistogramsSection";
import DocumentListSection from "../DocumentListSection/DocumentListSection";

export default function ResultPage() {
  return (
    <>
      <SearchInfoSection />
      <HistogramsSection />
      <DocumentListSection />
    </>
  );
}
