import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DocumentCard from "../DocumentCard/DocumentCard";
import { searchData } from "../SearchForm/SearchForm";
// @ts-ignore
import classes from "./DocumentListSection.module.css";
interface Document {
  ok: {
    issueDate: string;
    source: { name: string };
    url: string;
    title: { text: string };
    attributes: {
      isTechNews: boolean;
      isAnnouncement: boolean;
      isDigest: boolean;
      wordCount: number;
    };
    content: { markup: string };
  };
}

export default function DocumentListSection() {
  const [results, setResults] = useState<string[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  let searchResults: any;
  const navigate = useNavigate();

  interface DataItem {
    encodedId: string;
    influence: number;
  }

  function getEncodedIds(data: DataItem[]): string[] {
    return data.map((item) => item.encodedId);
  }

  async function getSearchResponse() {
    const result = await fetch(
      "https://gateway.scan-interfax.ru/api/v1/objectsearch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(searchData),
        credentials: "omit",
      },
    );
    const rJson = await result.json();
    searchResults = getEncodedIds(rJson.items);
    setResults(searchResults);
  }

  async function getDocuments(ids: string[]): Promise<Document[]> {
    const result = await fetch(
      "https://gateway.scan-interfax.ru/api/v1/documents",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ ids }),
        credentials: "omit",
      },
    );
    const rJson = await result.json();
    return rJson;
  }

  useEffect(() => {
    if (results.length > 0) {
      loadMoreDocuments();
    }
  }, [results]);

  useEffect(() => {
    async function start() {
      await getSearchResponse();
    }

    if (!searchData) {
      navigate("/search");
    } else {
      start();
    }
  }, []);

  const loadMoreDocuments = async () => {
    setLoading(true);
    const nextIds = results.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
    const newDocuments = await getDocuments(nextIds);
    setDocuments((prevDocuments) => [...prevDocuments, ...newDocuments]);
    setCurrentPage(currentPage + 1);
    setLoading(false);
    console.log("start");
  };

  return (
    <section>
      <h1 className={classes.title}>Список документов</h1>
      <div className={classes.list}>
        {documents.map((data) => (
          <DocumentCard
            key={data.ok.url}
            date={data.ok.issueDate}
            sourceName={data.ok.source.name}
            url={data.ok.url}
            title={data.ok.title.text}
            isTechNews={data.ok.attributes.isTechNews}
            isAnnouncement={data.ok.attributes.isAnnouncement}
            isDigest={data.ok.attributes.isDigest}
            content={data.ok.content.markup}
            wordCount={data.ok.attributes.wordCount}
          />
        ))}
      </div>
      <div className={classes.btnDiv}>
        {currentPage * itemsPerPage < results.length && (
          <button
            className={classes.button}
            onClick={loadMoreDocuments}
            disabled={loading}
          >
            {loading ? "Загрузка..." : "Показать больше"}
          </button>
        )}
      </div>
    </section>
  );
}
