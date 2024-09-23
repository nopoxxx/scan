// @ts-ignore
import classes from "./HeaderAccountInfo.module.css";
import { useEffect, useState } from "react";

export default function HeaderAccountInfo() {
  const [accountInfo, setAccountInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAccountInfo() {
      const response = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/account/info",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      );
      let result = await response.json();
      setAccountInfo(result.eventFiltersInfo);
    }

    async function start() {
      setLoading(true);
      await fetchAccountInfo();
      setLoading(false);
    }
    start();
  }, []);

  return (
    <div className={classes.info}>
      {!loading ? (
        <>
          <div className={classes.text}>
            <p className={classes.title}>Использовано компаний</p>
            <div className={classes.counter}>
              {accountInfo?.usedCompanyCount}
            </div>
          </div>
          <div className={classes.text}>
            <p className={classes.title}>Лимит по компаниям</p>
            <div className={classes.counterLimit}>
              {accountInfo?.companyLimit}
            </div>
          </div>
        </>
      ) : (
        <div className={classes.loadingDiv}>
          <img
            className={classes.loading}
            src={require("../../images/loading.png")}
          />
        </div>
      )}
    </div>
  );
}
