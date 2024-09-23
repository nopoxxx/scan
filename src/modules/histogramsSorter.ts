export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const histogramsSorter = (
  data: Array<{
    data: Array<{ date: string; value: number }>;
    histogramType: string;
  }>,
): Array<{ date: string; total: number; risks: number }> => {
  const allData: {
    [key: string]: { date: string; total: number; risks: number };
  } = {};

  data.forEach((histogram) => {
    histogram.data.forEach((item) => {
      const dateKey: string = item.date.split("T")[0];
      if (!allData[dateKey]) {
        allData[dateKey] = {
          date: formatDate(dateKey),
          total: 0,
          risks: 0,
        };
      }
      if (histogram.histogramType === "totalDocuments") {
        allData[dateKey].total += item.value;
      } else if (histogram.histogramType === "riskFactors") {
        allData[dateKey].risks += item.value;
      }
    });
  });

  return Object.values(allData).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};
